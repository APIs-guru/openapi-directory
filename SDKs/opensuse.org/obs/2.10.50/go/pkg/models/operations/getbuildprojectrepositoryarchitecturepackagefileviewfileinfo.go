package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	FileName         string `pathParam:"style=simple,explode=false,name=file_name"`
	PackageName      string `pathParam:"style=simple,explode=false,name=package_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum string

const (
	GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnumFileinfo    GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum = "fileinfo"
	GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnumFileinfoExt GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum = "fileinfo_ext"
)

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams struct {
	View []GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest struct {
	PathParams  GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams
	QueryParams GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams
	Security    GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity
}

type GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
