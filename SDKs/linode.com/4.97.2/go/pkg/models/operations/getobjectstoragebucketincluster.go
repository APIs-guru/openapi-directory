package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketinClusterServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketinClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageBucketinClusterSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetObjectStorageBucketinClusterSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketinClusterSecurity struct {
	Option1 *GetObjectStorageBucketinClusterSecurityOption1 `security:"option"`
	Option2 *GetObjectStorageBucketinClusterSecurityOption2 `security:"option"`
}

type GetObjectStorageBucketinClusterRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageBucketinClusterPathParams
	Security   GetObjectStorageBucketinClusterSecurity
}

type GetObjectStorageBucketinCluster200ApplicationJSON struct {
	Data    []shared.ObjectStorageBucket `json:"data"`
	Page    *int64                       `json:"page"`
	Pages   *int64                       `json:"pages"`
	Results *int64                       `json:"results"`
}

type GetObjectStorageBucketinClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetObjectStorageBucketinClusterResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetObjectStorageBucketinCluster200ApplicationJSONObject     *GetObjectStorageBucketinCluster200ApplicationJSON
	GetObjectStorageBucketinClusterDefaultApplicationJSONObject *GetObjectStorageBucketinClusterDefaultApplicationJSON
}
