package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilesV3FoldersFolderPathArchiveByPathPathParams struct {
	FolderPath string `pathParam:"style=simple,explode=false,name=folderPath"`
}

type DeleteFilesV3FoldersFolderPathArchiveByPathSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type DeleteFilesV3FoldersFolderPathArchiveByPathRequest struct {
	PathParams DeleteFilesV3FoldersFolderPathArchiveByPathPathParams
	Security   DeleteFilesV3FoldersFolderPathArchiveByPathSecurity
}

type DeleteFilesV3FoldersFolderPathArchiveByPathResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
