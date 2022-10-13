package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams struct {
	ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
	BinaryFilename   string `pathParam:"style=simple,explode=false,name=binary_filename"`
	ProjectName      string `pathParam:"style=simple,explode=false,name=project_name"`
	RepositoryName   string `pathParam:"style=simple,explode=false,name=repository_name"`
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest struct {
	PathParams GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams
	Security   GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
