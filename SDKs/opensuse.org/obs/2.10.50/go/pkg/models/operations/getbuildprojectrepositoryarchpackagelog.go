package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectRepositoryArchPackageLogPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	PackageName      string `pathParam:"style=simple,explode=false,name=package_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectRepositoryArchPackageLogSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectRepositoryArchPackageLogRequest struct {
	PathParams GetBuildProjectRepositoryArchPackageLogPathParams
	Security   GetBuildProjectRepositoryArchPackageLogSecurity
}

type GetBuildProjectRepositoryArchPackageLogResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
