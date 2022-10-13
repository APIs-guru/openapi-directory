package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNameRepositoryNameArchitectureNameRepositoryPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectNameRepositoryNameArchitectureNameRepositorySecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameRepositoryNameArchitectureNameRepositoryRequest struct {
	PathParams GetBuildProjectNameRepositoryNameArchitectureNameRepositoryPathParams
	Security   GetBuildProjectNameRepositoryNameArchitectureNameRepositorySecurity
}

type GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
