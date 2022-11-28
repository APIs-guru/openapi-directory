package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageClustersServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageClusters200ApplicationJSON struct {
	Data    []shared.ObjectStorageCluster `json:"data,omitempty"`
	Page    *int64                        `json:"page,omitempty"`
	Pages   *int64                        `json:"pages,omitempty"`
	Results *int64                        `json:"results,omitempty"`
}

type GetObjectStorageClustersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageClustersRequest struct {
	ServerURL *string
}

type GetObjectStorageClustersResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetObjectStorageClusters200ApplicationJSONObject     *GetObjectStorageClusters200ApplicationJSON
	GetObjectStorageClustersDefaultApplicationJSONObject *GetObjectStorageClustersDefaultApplicationJSON
}
