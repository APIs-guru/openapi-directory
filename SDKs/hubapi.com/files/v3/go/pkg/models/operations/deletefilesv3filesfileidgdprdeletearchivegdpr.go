package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurity struct {
	Option1 *DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption1 `security:"option"`
	Option2 *DeleteFilesV3FilesFileIDGdprDeleteArchiveGdprSecurityOption2 `security:"option"`
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
