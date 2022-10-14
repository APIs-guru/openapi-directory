package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodeBalancerSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodeBalancerSecurity struct {
	Option1 *GetNodeBalancerSecurityOption1 `security:"option"`
	Option2 *GetNodeBalancerSecurityOption2 `security:"option"`
}

type GetNodeBalancerRequest struct {
	PathParams GetNodeBalancerPathParams
	Security   GetNodeBalancerSecurity
}

type GetNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerResponse struct {
	ContentType                                 string
	NodeBalancer                                *shared.NodeBalancer
	StatusCode                                  int64
	GetNodeBalancerDefaultApplicationJSONObject *GetNodeBalancerDefaultApplicationJSON
}
