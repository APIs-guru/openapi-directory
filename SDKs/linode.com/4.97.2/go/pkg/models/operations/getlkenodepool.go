package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeNodePoolPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type GetLkeNodePoolSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeNodePoolSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeNodePoolSecurity struct {
	Option1 *GetLkeNodePoolSecurityOption1 `security:"option"`
	Option2 *GetLkeNodePoolSecurityOption2 `security:"option"`
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
