package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClusterGroupsCreateRequest struct {
	Request shared.ClusterGroupInput `request:"mediaType=application/json"`
}

type VirtualizationClusterGroupsCreateResponse struct {
	ClusterGroup *shared.ClusterGroup
	ContentType  string
	StatusCode   int64
}
