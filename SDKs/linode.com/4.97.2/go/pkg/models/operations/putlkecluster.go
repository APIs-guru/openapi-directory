package operations

import (
	"openapi/pkg/models/shared"
)

type PutLkeClusterPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type PutLkeClusterSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type PutLkeClusterRequest struct {
	PathParams PutLkeClusterPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PutLkeClusterSecurity
}

type PutLkeClusterResponse struct {
	ContentType                        string
	StatusCode                         int64
	PutLkeCluster200ApplicationJSONAny *interface{}
}
