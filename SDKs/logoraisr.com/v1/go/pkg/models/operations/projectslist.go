package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListResponse struct {
	ContentType string
	Project     *shared.Project
	StatusCode  int64
}
