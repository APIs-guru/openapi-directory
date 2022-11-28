package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLkeClusterPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type DeleteLkeClusterSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLkeClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLkeClusterRequest struct {
	PathParams DeleteLkeClusterPathParams
	Security   DeleteLkeClusterSecurity
}

type DeleteLkeClusterResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeleteLkeCluster200ApplicationJSONObject     map[string]interface{}
	DeleteLkeClusterDefaultApplicationJSONObject *DeleteLkeClusterDefaultApplicationJSON
}
