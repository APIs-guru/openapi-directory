package operations

import (
	"openapi/pkg/models/shared"
)

type GetSolutionPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetSolutionRequest struct {
	PathParams GetSolutionPathParams
}

type GetSolution404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
	Status  *string `json:"status,omitempty"`
}

type GetSolutionResponse struct {
	BadRequest                          *shared.BadRequest
	ContentType                         string
	Headers                             map[string][]string
	Response                            *shared.Response
	StatusCode                          int64
	GetSolution404ApplicationJSONObject *GetSolution404ApplicationJSON
}
