package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNodeBalancerConfigNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
	NodeID         int64 `pathParam:"style=simple,explode=false,name=nodeId"`
}

type DeleteNodeBalancerConfigNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteNodeBalancerConfigNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteNodeBalancerConfigNodeRequest struct {
	PathParams DeleteNodeBalancerConfigNodePathParams
	Security   DeleteNodeBalancerConfigNodeSecurity
}

type DeleteNodeBalancerConfigNodeResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	DeleteNodeBalancerConfigNode200ApplicationJSONObject     map[string]interface{}
	DeleteNodeBalancerConfigNodeDefaultApplicationJSONObject *DeleteNodeBalancerConfigNodeDefaultApplicationJSON
}
