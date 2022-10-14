package operations

import (
	"openapi/pkg/models/shared"
)

type CreateQueryJobQueryParams struct {
	Language     string  `queryParam:"style=form,explode=true,name=language"`
	ProjectID    []int64 `queryParam:"style=form,explode=true,name=project-id"`
	ProjectsList *string `queryParam:"style=form,explode=true,name=projects-list"`
}

type CreateQueryJobSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateQueryJobRequest struct {
	QueryParams CreateQueryJobQueryParams
	Request     string `request:"mediaType=text/plain"`
	Security    CreateQueryJobSecurity
}

type CreateQueryJobResponse struct {
	ContentType string
	StatusCode  int64
	Operation   *shared.Operation
}
