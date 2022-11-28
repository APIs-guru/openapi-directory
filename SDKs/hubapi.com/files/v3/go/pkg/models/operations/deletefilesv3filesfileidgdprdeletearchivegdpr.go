package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprRequest struct {
	PathParams DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprPathParams
	Security   DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurity
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
