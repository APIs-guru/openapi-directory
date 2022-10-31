package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum string

const (
	GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnumPkgnames    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum = "pkgnames"
	GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnumRevpkgnames GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum = "revpkgnames"
	GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnumOrder       GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum = "order"
)

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams struct {
	Package *string                                                                `queryParam:"style=form,explode=true,name=package"`
	View    *GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest struct {
	PathParams  GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams
	QueryParams GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams
	Security    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity
}

type GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
