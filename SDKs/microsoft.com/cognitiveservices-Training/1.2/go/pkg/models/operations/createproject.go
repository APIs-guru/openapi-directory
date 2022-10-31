package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectQueryParams struct {
	Description *string `queryParam:"style=form,explode=true,name=description"`
	DomainID    *string `queryParam:"style=form,explode=true,name=domainId"`
	Name        string  `queryParam:"style=form,explode=true,name=name"`
}

type CreateProjectHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type CreateProjectRequest struct {
	QueryParams CreateProjectQueryParams
	Headers     CreateProjectHeaders
}

type CreateProjectResponse struct {
	Body        []byte
	ContentType string
	Project     *shared.Project
	StatusCode  int64
}
