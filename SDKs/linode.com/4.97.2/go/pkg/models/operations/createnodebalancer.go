package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodeBalancerSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateNodeBalancerRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateNodeBalancerSecurity
}

type CreateNodeBalancerResponse struct {
	ContentType                                    string
	NodeBalancer                                   *shared.NodeBalancer
	StatusCode                                     int64
	CreateNodeBalancerDefaultApplicationJSONObject *CreateNodeBalancerDefaultApplicationJSON
}
