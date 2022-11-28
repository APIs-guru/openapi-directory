package operations

import (
	"openapi/pkg/models/shared"
)

type PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum string

const (
	PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnumRepository PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum = "_repository"
)

type PutBuildProjectRepositoryArchitecturePackageFilePathParams struct {
	ArchitectureName string                                                            `pathParam:"style=simple,explode=false,name=architecture_name"`
	FileName         string                                                            `pathParam:"style=simple,explode=false,name=file_name"`
	PackageName      []PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum `pathParam:"style=simple,explode=false,name=package_name"`
	ProjectName      string                                                            `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string                                                            `pathParam:"style=simple,explode=false,name=repository_name"`
}

type PutBuildProjectRepositoryArchitecturePackageFileSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PutBuildProjectRepositoryArchitecturePackageFileRequest struct {
	PathParams PutBuildProjectRepositoryArchitecturePackageFilePathParams
	Request    *string `request:"mediaType=plain/text"`
	Security   PutBuildProjectRepositoryArchitecturePackageFileSecurity
}

type PutBuildProjectRepositoryArchitecturePackageFileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
