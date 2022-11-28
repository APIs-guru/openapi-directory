package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageClusterServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageClusterDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageClusterRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageClusterPathParams
}

type GetObjectStorageClusterResponse struct {
	ContentType                                         string
	ObjectStorageCluster                                *shared.ObjectStorageCluster
	StatusCode                                          int64
	GetObjectStorageClusterDefaultApplicationJSONObject *GetObjectStorageClusterDefaultApplicationJSON
}
