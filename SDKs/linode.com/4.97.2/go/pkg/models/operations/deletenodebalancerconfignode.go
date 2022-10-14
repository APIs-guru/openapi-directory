package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerConfigNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type DeleteNodeBalancerConfigNodeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteNodeBalancerConfigNodeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerConfigNodeSecurity struct {
	Option1 *DeleteNodeBalancerConfigNodeSecurityOption1 `security:"option"`
	Option2 *DeleteNodeBalancerConfigNodeSecurityOption2 `security:"option"`
}

type DeleteNodeBalancerConfigNodeRequest struct {
	PathParams DeleteNodeBalancerConfigNodePathParams
	Security   DeleteNodeBalancerConfigNodeSecurity
}

type DeleteNodeBalancerConfigNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteNodeBalancerConfigNodeResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	DeleteNodeBalancerConfigNode200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerConfigNodeDefaultApplicationJSONObject *DeleteNodeBalancerConfigNodeDefaultApplicationJSON
}
