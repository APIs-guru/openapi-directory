package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClusterGroupsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type VirtualizationClusterGroupsUpdateRequest struct {
	PathParams VirtualizationClusterGroupsUpdatePathParams
	Request    shared.ClusterGroupInput `request:"mediaType=application/json"`
}

type VirtualizationClusterGroupsUpdateResponse struct {
	ClusterGroup *shared.ClusterGroup
	ContentType  string
	StatusCode   int64
}
