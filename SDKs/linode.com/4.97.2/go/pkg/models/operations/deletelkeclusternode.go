package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLkeClusterNodePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type DeleteLkeClusterNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLkeClusterNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLkeClusterNodeRequest struct {
	PathParams DeleteLkeClusterNodePathParams
	Security   DeleteLkeClusterNodeSecurity
}

type DeleteLkeClusterNodeResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLkeClusterNode200ApplicationJSONObject     map[string]interface{}
	DeleteLkeClusterNodeDefaultApplicationJSONObject *DeleteLkeClusterNodeDefaultApplicationJSON
}
