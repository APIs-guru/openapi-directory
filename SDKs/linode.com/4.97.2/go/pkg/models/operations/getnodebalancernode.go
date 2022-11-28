package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type GetNodeBalancerNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetNodeBalancerNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerNodeRequest struct {
	PathParams GetNodeBalancerNodePathParams
	Security   GetNodeBalancerNodeSecurity
}

type GetNodeBalancerNodeResponse struct {
	ContentType                                     string
	NodeBalancerNode                                *shared.NodeBalancerNode
	StatusCode                                      int64
	GetNodeBalancerNodeDefaultApplicationJSONObject *GetNodeBalancerNodeDefaultApplicationJSON
}
