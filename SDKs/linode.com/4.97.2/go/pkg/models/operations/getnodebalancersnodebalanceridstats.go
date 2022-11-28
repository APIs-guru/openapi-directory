package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodebalancersNodeBalancerIDStatsPathParams struct {
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type GetNodebalancersNodeBalancerIDStatsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodebalancersNodeBalancerIDStatsRequest struct {
	PathParams GetNodebalancersNodeBalancerIDStatsPathParams
	Security   GetNodebalancersNodeBalancerIDStatsSecurity
}

type GetNodebalancersNodeBalancerIDStatsResponse struct {
	ContentType                                                     string
	GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSONObject *GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON
	NodeBalancerStats                                               *shared.NodeBalancerStats
	StatusCode                                                      int64
}
