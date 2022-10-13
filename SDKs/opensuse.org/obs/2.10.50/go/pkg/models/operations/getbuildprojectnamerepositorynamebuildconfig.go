package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNameRepositoryNameBuildconfigPathParams struct {
	ProjectName    string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectNameRepositoryNameBuildconfigSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameRepositoryNameBuildconfigRequest struct {
	PathParams GetBuildProjectNameRepositoryNameBuildconfigPathParams
	Security   GetBuildProjectNameRepositoryNameBuildconfigSecurity
}

type GetBuildProjectNameRepositoryNameBuildconfigResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
