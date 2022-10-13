package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageClustersServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageClustersRequest struct {
	ServerURL *string
}

type GetObjectStorageClusters200ApplicationJSON struct {
	Data    []shared.ObjectStorageCluster `json:"data"`
	Page    *int64                        `json:"page"`
	Pages   *int64                        `json:"pages"`
	Results *int64                        `json:"results"`
}

type GetObjectStorageClustersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetObjectStorageClustersResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetObjectStorageClusters200ApplicationJSONObject     *GetObjectStorageClusters200ApplicationJSON
	GetObjectStorageClustersDefaultApplicationJSONObject *GetObjectStorageClustersDefaultApplicationJSON
}
