package operations

import (
	"openapi/pkg/models/shared"
)

type GetClusterSolutionPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetClusterSolution404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
	Status  *string `json:"status,omitempty"`
}

type GetClusterSolutionRequest struct {
	PathParams GetClusterSolutionPathParams
}

type GetClusterSolutionResponse struct {
	BadRequest                                 *shared.BadRequest
	ClusterResponse                            *shared.ClusterResponse
	ContentType                                string
	Headers                                    map[string][]string
	StatusCode                                 int64
	GetClusterSolution404ApplicationJSONObject *GetClusterSolution404ApplicationJSON
}
