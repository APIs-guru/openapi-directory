package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClusterTypesCreateRequest struct {
	Request shared.ClusterTypeInput `request:"mediaType=application/json"`
}

type VirtualizationClusterTypesCreateResponse struct {
	ClusterType *shared.ClusterType
	ContentType string
	StatusCode  int64
}
