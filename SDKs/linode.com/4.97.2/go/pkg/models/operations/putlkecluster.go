package operations

import (
	"openapi/pkg/models/shared"
)

type PutLkeClusterPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type PutLkeClusterSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type PutLkeClusterSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PutLkeClusterSecurity struct {
	Option1 *PutLkeClusterSecurityOption1 `security:"option"`
	Option2 *PutLkeClusterSecurityOption2 `security:"option"`
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
