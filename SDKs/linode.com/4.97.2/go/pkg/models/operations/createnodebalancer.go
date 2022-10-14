package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodeBalancerSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateNodeBalancerSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateNodeBalancerSecurity struct {
	Option1 *CreateNodeBalancerSecurityOption1 `security:"option"`
	Option2 *CreateNodeBalancerSecurityOption2 `security:"option"`
}

type CreateNodeBalancerRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security CreateNodeBalancerSecurity
}

type CreateNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateNodeBalancerResponse struct {
	ContentType                                    string
	NodeBalancer                                   *shared.NodeBalancer
	StatusCode                                     int64
	CreateNodeBalancerDefaultApplicationJSONObject *CreateNodeBalancerDefaultApplicationJSON
}
