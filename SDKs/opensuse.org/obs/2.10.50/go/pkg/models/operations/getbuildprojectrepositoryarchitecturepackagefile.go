package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuildProjectRepositoryArchitecturePackageFilePathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	FileName         string `pathParam:"style=simple,explode=false,name=file_name"`
	PackageName      string `pathParam:"style=simple,explode=false,name=package_name"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetBuildProjectRepositoryArchitecturePackageFileSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetBuildProjectRepositoryArchitecturePackageFileRequest struct {
	PathParams GetBuildProjectRepositoryArchitecturePackageFilePathParams
	Security   GetBuildProjectRepositoryArchitecturePackageFileSecurity
}

type GetBuildProjectRepositoryArchitecturePackageFileResponse struct {
	Body                                                                               []byte
	ContentType                                                                        string
	StatusCode                                                                         int64
	GetBuildProjectRepositoryArchitecturePackageFile200ApplicationWildcardBinaryString []byte
}
