package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventPathParams struct {
	EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
}

type GetEventSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetEventDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetEventRequest struct {
	PathParams GetEventPathParams
	Security   GetEventSecurity
}

type GetEventResponse struct {
	ContentType                          string
	Event                                *shared.Event
	StatusCode                           int64
	GetEventDefaultApplicationJSONObject *GetEventDefaultApplicationJSON
}
