package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNameRepositoryNamePathParams struct {
	ProjectName    string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectNameRepositoryNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameRepositoryNameRequest struct {
	PathParams GetBuildProjectNameRepositoryNamePathParams
	Security   GetBuildProjectNameRepositoryNameSecurity
}

type GetBuildProjectNameRepositoryNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
