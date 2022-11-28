package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterRequest struct {
	PathParams GetLkeClusterPathParams
	Security   GetLkeClusterSecurity
}

type GetLkeClusterResponse struct {
	ContentType                               string
	LkeCluster                                *shared.LkeCluster
	StatusCode                                int64
	GetLkeClusterDefaultApplicationJSONObject *GetLkeClusterDefaultApplicationJSON
}
