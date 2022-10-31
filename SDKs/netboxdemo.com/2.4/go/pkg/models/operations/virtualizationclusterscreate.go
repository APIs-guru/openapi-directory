package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualizationClustersCreateRequest struct {
	Request shared.WritableCluster `request:"mediaType=application/json"`
}

type VirtualizationClustersCreateResponse struct {
	Cluster     *shared.Cluster
	ContentType string
	StatusCode  int64
}
