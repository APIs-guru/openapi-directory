package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetProjectRequest struct {
	PathParams GetProjectPathParams
	Headers    GetProjectHeaders
}

type GetProjectResponse struct {
	Body        []byte
	ContentType string
	Project     *shared.Project
	StatusCode  int64
}
