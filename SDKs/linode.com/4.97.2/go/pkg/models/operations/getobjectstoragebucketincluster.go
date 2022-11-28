package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketinClusterServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketinClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageBucketinClusterSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketinCluster200ApplicationJSON struct {
	Data    []shared.ObjectStorageBucket `json:"data,omitempty"`
	Page    *int64                       `json:"page,omitempty"`
	Pages   *int64                       `json:"pages,omitempty"`
	Results *int64                       `json:"results,omitempty"`
}

type GetObjectStorageBucketinClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageBucketinClusterRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageBucketinClusterPathParams
	Security   GetObjectStorageBucketinClusterSecurity
}

type GetObjectStorageBucketinClusterResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetObjectStorageBucketinCluster200ApplicationJSONObject     *GetObjectStorageBucketinCluster200ApplicationJSON
	GetObjectStorageBucketinClusterDefaultApplicationJSONObject *GetObjectStorageBucketinClusterDefaultApplicationJSON
}
