package operations

import (
	"openapi/pkg/models/shared"
)

type TrainProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type TrainProjectHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type TrainProjectRequest struct {
	PathParams TrainProjectPathParams
	Headers    TrainProjectHeaders
}

type TrainProjectResponse struct {
	Body        []byte
	ContentType string
	Iteration   *shared.Iteration
	StatusCode  int64
}
