package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodeBalancerNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type UpdateNodeBalancerNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateNodeBalancerNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateNodeBalancerNodeRequest struct {
	PathParams UpdateNodeBalancerNodePathParams
	Request    shared.NodeBalancerNodeInput `request:"mediaType=application/json"`
	Security   UpdateNodeBalancerNodeSecurity
}

type UpdateNodeBalancerNodeResponse struct {
	ContentType                                        string
	NodeBalancerNode                                   *shared.NodeBalancerNode
	StatusCode                                         int64
	UpdateNodeBalancerNodeDefaultApplicationJSONObject *UpdateNodeBalancerNodeDefaultApplicationJSON
}
