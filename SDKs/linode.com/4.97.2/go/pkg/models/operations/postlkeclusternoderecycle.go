package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterNodeRecyclePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type PostLkeClusterNodeRecycleSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PostLkeClusterNodeRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostLkeClusterNodeRecycleRequest struct {
	PathParams PostLkeClusterNodeRecyclePathParams
	Security   PostLkeClusterNodeRecycleSecurity
}

type PostLkeClusterNodeRecycleResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PostLkeClusterNodeRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterNodeRecycleDefaultApplicationJSONObject *PostLkeClusterNodeRecycleDefaultApplicationJSON
}
