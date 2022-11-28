package operations

import (
	"openapi/pkg/models/shared"
)

type EventSeenPathParams struct {
	EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
}

type EventSeenSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type EventSeenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EventSeenRequest struct {
	PathParams EventSeenPathParams
	Security   EventSeenSecurity
}

type EventSeenResponse struct {
	ContentType                           string
	StatusCode                            int64
	EventSeen200ApplicationJSONObject     map[string]interface{}
	EventSeenDefaultApplicationJSONObject *EventSeenDefaultApplicationJSON
}
