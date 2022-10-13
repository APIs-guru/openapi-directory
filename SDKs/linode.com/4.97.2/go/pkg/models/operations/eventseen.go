package operations

import (
	"openapi/pkg/models/shared"
)

type EventSeenPathParams struct {
	EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
}

type EventSeenSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type EventSeenSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type EventSeenSecurity struct {
	Option1 *EventSeenSecurityOption1 `security:"option"`
	Option2 *EventSeenSecurityOption2 `security:"option"`
}

type EventSeenRequest struct {
	PathParams EventSeenPathParams
	Security   EventSeenSecurity
}

type EventSeenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type EventSeenResponse struct {
	ContentType                           string
	StatusCode                            int64
	EventSeen200ApplicationJSONObject     map[string]interface{}
	EventSeenDefaultApplicationJSONObject *EventSeenDefaultApplicationJSON
}
