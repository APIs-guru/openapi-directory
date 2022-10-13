package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectRepositoryArchPackageStatusPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	PackageName      string `pathParam:"style=simple,explode=false,name=package_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectRepositoryArchPackageStatusSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectRepositoryArchPackageStatusRequest struct {
	PathParams GetBuildProjectRepositoryArchPackageStatusPathParams
	Security   GetBuildProjectRepositoryArchPackageStatusSecurity
}

type GetBuildProjectRepositoryArchPackageStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
