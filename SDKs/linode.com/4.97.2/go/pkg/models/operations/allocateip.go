package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateIPSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AllocateIPDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AllocateIPRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security AllocateIPSecurity
}

type AllocateIPResponse struct {
	ContentType                            string
	IPAddress                              *shared.IPAddress
	StatusCode                             int64
	AllocateIPDefaultApplicationJSONObject *AllocateIPDefaultApplicationJSON
}
