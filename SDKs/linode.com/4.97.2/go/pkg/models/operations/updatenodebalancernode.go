package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodeBalancerNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type UpdateNodeBalancerNodeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateNodeBalancerNodeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateNodeBalancerNodeSecurity struct {
	Option1 *UpdateNodeBalancerNodeSecurityOption1 `security:"option"`
	Option2 *UpdateNodeBalancerNodeSecurityOption2 `security:"option"`
}

type UpdateNodeBalancerNodeRequest struct {
	PathParams UpdateNodeBalancerNodePathParams
	Request    shared.NodeBalancerNode `request:"mediaType=application/json"`
	Security   UpdateNodeBalancerNodeSecurity
}

type UpdateNodeBalancerNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateNodeBalancerNodeResponse struct {
	ContentType                                        string
	NodeBalancerNode                                   *shared.NodeBalancerNode
	StatusCode                                         int64
	UpdateNodeBalancerNodeDefaultApplicationJSONObject *UpdateNodeBalancerNodeDefaultApplicationJSON
}
