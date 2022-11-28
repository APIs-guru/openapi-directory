package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeNodePoolPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type GetLkeNodePoolSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeNodePoolRequest struct {
	PathParams GetLkeNodePoolPathParams
	Security   GetLkeNodePoolSecurity
}

type GetLkeNodePoolResponse struct {
	ContentType string
	LkeNodePool *shared.LkeNodePool
	StatusCode  int64
}
