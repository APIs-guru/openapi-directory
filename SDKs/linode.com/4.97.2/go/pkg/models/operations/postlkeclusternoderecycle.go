package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterNodeRecyclePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type PostLkeClusterNodeRecycleSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type PostLkeClusterNodeRecycleSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PostLkeClusterNodeRecycleSecurity struct {
	Option1 *PostLkeClusterNodeRecycleSecurityOption1 `security:"option"`
	Option2 *PostLkeClusterNodeRecycleSecurityOption2 `security:"option"`
}

type PostLkeClusterNodeRecycleRequest struct {
	PathParams PostLkeClusterNodeRecyclePathParams
	Security   PostLkeClusterNodeRecycleSecurity
}

type PostLkeClusterNodeRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type PostLkeClusterNodeRecycleResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	PostLkeClusterNodeRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterNodeRecycleDefaultApplicationJSONObject *PostLkeClusterNodeRecycleDefaultApplicationJSON
}
