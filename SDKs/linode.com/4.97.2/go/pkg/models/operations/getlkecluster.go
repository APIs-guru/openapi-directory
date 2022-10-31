package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClusterSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClusterSecurity struct {
	Option1 *GetLkeClusterSecurityOption1 `security:"option"`
	Option2 *GetLkeClusterSecurityOption2 `security:"option"`
}

type GetLkeClusterRequest struct {
	PathParams GetLkeClusterPathParams
	Security   GetLkeClusterSecurity
}

type GetLkeClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterResponse struct {
	ContentType                               string
	LkeCluster                                *shared.LkeCluster
	StatusCode                                int64
	GetLkeClusterDefaultApplicationJSONObject *GetLkeClusterDefaultApplicationJSON
}
