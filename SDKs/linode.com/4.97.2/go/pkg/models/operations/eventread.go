package operations

import (
	"openapi/pkg/models/shared"
)

type EventReadPathParams struct {
	EventID int64 `pathParam:"style=simple,explode=false,name=eventId"`
}

type EventReadSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type EventReadDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type EventReadRequest struct {
	PathParams EventReadPathParams
	Security   EventReadSecurity
}

type EventReadResponse struct {
	ContentType                           string
	StatusCode                            int64
	EventRead200ApplicationJSONObject     map[string]interface{}
	EventReadDefaultApplicationJSONObject *EventReadDefaultApplicationJSON
}
