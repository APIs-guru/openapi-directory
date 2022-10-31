package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublishedProjectNameRepositoryNamePathParams struct {
	ProjectName    string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetPublishedProjectNameRepositoryNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPublishedProjectNameRepositoryNameRequest struct {
	PathParams GetPublishedProjectNameRepositoryNamePathParams
	Security   GetPublishedProjectNameRepositoryNameSecurity
}

type GetPublishedProjectNameRepositoryNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
