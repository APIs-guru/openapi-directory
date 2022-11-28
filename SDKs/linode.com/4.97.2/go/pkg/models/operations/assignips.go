package operations

import (
	"openapi/pkg/models/shared"
)

type AssignIPsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AssignIPsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AssignIPsRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security AssignIPsSecurity
}

type AssignIPsResponse struct {
	ContentType                           string
	StatusCode                            int64
	AssignIPs200ApplicationJSONObject     map[string]interface{}
	AssignIPsDefaultApplicationJSONObject *AssignIPsDefaultApplicationJSON
}
