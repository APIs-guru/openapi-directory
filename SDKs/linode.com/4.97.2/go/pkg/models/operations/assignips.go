package operations

import (
	"openapi/pkg/models/shared"
)

type AssignIPsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type AssignIPsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AssignIPsSecurity struct {
	Option1 *AssignIPsSecurityOption1 `security:"option"`
	Option2 *AssignIPsSecurityOption2 `security:"option"`
}

type AssignIPsRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security AssignIPsSecurity
}

type AssignIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type AssignIPsResponse struct {
	ContentType                           string
	StatusCode                            int64
	AssignIPs200ApplicationJSONObject     map[string]interface{}
	AssignIPsDefaultApplicationJSONObject *AssignIPsDefaultApplicationJSON
}
