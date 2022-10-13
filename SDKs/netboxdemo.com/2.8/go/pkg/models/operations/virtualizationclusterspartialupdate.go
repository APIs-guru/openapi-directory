package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClustersPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationClustersPartialUpdateRequest struct {
	PathParams VirtualizationClustersPartialUpdatePathParams
	Request    shared.WritableCluster `request:"mediaType=application/json"`
}

type VirtualizationClustersPartialUpdateResponse struct {
	Cluster     *shared.Cluster
	ContentType string
	StatusCode  int64
}
