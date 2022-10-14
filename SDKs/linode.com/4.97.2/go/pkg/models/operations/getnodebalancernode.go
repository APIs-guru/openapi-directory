package operations

import (
	"openapi/pkg/models/shared"
)

type GetNodeBalancerNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type GetNodeBalancerNodeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetNodeBalancerNodeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetNodeBalancerNodeSecurity struct {
	Option1 *GetNodeBalancerNodeSecurityOption1 `security:"option"`
	Option2 *GetNodeBalancerNodeSecurityOption2 `security:"option"`
}

type GetNodeBalancerNodeRequest struct {
	PathParams GetNodeBalancerNodePathParams
	Security   GetNodeBalancerNodeSecurity
}

type GetNodeBalancerNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetNodeBalancerNodeResponse struct {
	ContentType                                     string
	NodeBalancerNode                                *shared.NodeBalancerNode
	StatusCode                                      int64
	GetNodeBalancerNodeDefaultApplicationJSONObject *GetNodeBalancerNodeDefaultApplicationJSON
}
