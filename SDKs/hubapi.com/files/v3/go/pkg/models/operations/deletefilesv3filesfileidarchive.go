package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilesV3FilesFileIDArchivePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DeleteFilesV3FilesFileIDArchiveSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type DeleteFilesV3FilesFileIDArchiveRequest struct {
	PathParams DeleteFilesV3FilesFileIDArchivePathParams
	Security   DeleteFilesV3FilesFileIDArchiveSecurity
}

type DeleteFilesV3FilesFileIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
