package operations

import (
	"openapi/pkg/models/shared"
)

type ShareIPsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ShareIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ShareIPsRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security ShareIPsSecurity
}

type ShareIPsResponse struct {
	ContentType                          string
	StatusCode                           int64
	ShareIPs200ApplicationJSONObject     map[string]interface{}
	ShareIPsDefaultApplicationJSONObject *ShareIPsDefaultApplicationJSON
}
