package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
}

type GetEventSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetEventSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetEventSecurity struct {
	Option1 *GetEventSecurityOption1 `security:"option"`
	Option2 *GetEventSecurityOption2 `security:"option"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
	Security   GetEventSecurity
}

type GetEventDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetEventResponse struct {
	ContentType                          string
	Event                                *shared.Event
	StatusCode                           int64
	GetEventDefaultApplicationJSONObject *GetEventDefaultApplicationJSON
}
