package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodeBalancerSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetNodeBalancerDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerRequest struct {
	PathParams GetNodeBalancerPathParams
	Security   GetNodeBalancerSecurity
}

type GetNodeBalancerResponse struct {
	ContentType                                 string
	NodeBalancer                                *shared.NodeBalancer
	StatusCode                                  int64
	GetNodeBalancerDefaultApplicationJSONObject *GetNodeBalancerDefaultApplicationJSON
}
