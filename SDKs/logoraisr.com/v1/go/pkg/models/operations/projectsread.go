package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsReadPathParams struct {
	ProjectNumber string `pathParam:"style=simple,explode=false,name=project_number"`
}

type ProjectsReadRequest struct {
	PathParams ProjectsReadPathParams
}

type ProjectsReadResponse struct {
	ContentType string
	Project     *shared.Project
	StatusCode  int64
}
