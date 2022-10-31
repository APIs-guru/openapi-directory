package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodebalancersNodeBalancerIDStatsPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodebalancersNodeBalancerIDStatsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodebalancersNodeBalancerIDStatsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodebalancersNodeBalancerIDStatsSecurity struct {
	Option1 *GetNodebalancersNodeBalancerIDStatsSecurityOption1 `security:"option"`
	Option2 *GetNodebalancersNodeBalancerIDStatsSecurityOption2 `security:"option"`
}

type GetNodebalancersNodeBalancerIDStatsRequest struct {
	PathParams GetNodebalancersNodeBalancerIDStatsPathParams
	Security   GetNodebalancersNodeBalancerIDStatsSecurity
}

type GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodebalancersNodeBalancerIDStatsResponse struct {
	ContentType                                                     string
	GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSONObject *GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON
	NodeBalancerStats                                               *shared.NodeBalancerStats
	StatusCode                                                      int64
}
