package operations

import (
	"openapi/pkg/models/shared"
)

type PutLkeNodePoolPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type PutLkeNodePoolSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PutLkeNodePoolRequest struct {
	PathParams PutLkeNodePoolPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PutLkeNodePoolSecurity
}

type PutLkeNodePoolResponse struct {
	ContentType string
	LkeNodePool *shared.LkeNodePool
	StatusCode  int64
}
