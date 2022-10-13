package operations

import (
	"openapi/pkg/models/shared"
)

type ShareIPsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ShareIPsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ShareIPsSecurity struct {
	Option1 *ShareIPsSecurityOption1 `security:"option"`
	Option2 *ShareIPsSecurityOption2 `security:"option"`
}

type ShareIPsRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security ShareIPsSecurity
}

type ShareIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type ShareIPsResponse struct {
	ContentType                          string
	StatusCode                           int64
	ShareIPs200ApplicationJSONObject     map[string]interface{}
	ShareIPsDefaultApplicationJSONObject *ShareIPsDefaultApplicationJSON
}
