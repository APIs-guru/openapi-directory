package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClusterTypesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationClusterTypesPartialUpdateRequest struct {
	PathParams VirtualizationClusterTypesPartialUpdatePathParams
	Request    shared.ClusterType `request:"mediaType=application/json"`
}

type VirtualizationClusterTypesPartialUpdateResponse struct {
	ClusterType *shared.ClusterType
	ContentType string
	StatusCode  int64
}
