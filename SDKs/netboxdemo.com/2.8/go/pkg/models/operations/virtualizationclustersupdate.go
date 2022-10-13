package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClustersUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationClustersUpdateRequest struct {
	PathParams VirtualizationClustersUpdatePathParams
	Request    shared.WritableCluster `request:"mediaType=application/json"`
}

type VirtualizationClustersUpdateResponse struct {
	Cluster     *shared.Cluster
	ContentType string
	StatusCode  int64
}
