package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublishedProjectNameRepositoryNameArchitectureNamePathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetPublishedProjectNameRepositoryNameArchitectureNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPublishedProjectNameRepositoryNameArchitectureNameRequest struct {
	PathParams GetPublishedProjectNameRepositoryNameArchitectureNamePathParams
	Security   GetPublishedProjectNameRepositoryNameArchitectureNameSecurity
}

type GetPublishedProjectNameRepositoryNameArchitectureNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
