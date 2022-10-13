package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLkeClusterNodePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type DeleteLkeClusterNodeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLkeClusterNodeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteLkeClusterNodeSecurity struct {
	Option1 *DeleteLkeClusterNodeSecurityOption1 `security:"option"`
	Option2 *DeleteLkeClusterNodeSecurityOption2 `security:"option"`
}

type DeleteLkeClusterNodeRequest struct {
	PathParams DeleteLkeClusterNodePathParams
	Security   DeleteLkeClusterNodeSecurity
}

type DeleteLkeClusterNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type DeleteLkeClusterNodeResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	DeleteLkeClusterNode200ApplicationJSONObject     map[string]interface{}
	DeleteLkeClusterNodeDefaultApplicationJSONObject *DeleteLkeClusterNodeDefaultApplicationJSON
}
