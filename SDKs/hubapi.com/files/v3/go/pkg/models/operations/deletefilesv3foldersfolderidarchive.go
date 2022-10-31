package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFilesV3FoldersFolderIDArchivePathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
}

type DeleteFilesV3FoldersFolderIDArchiveSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type DeleteFilesV3FoldersFolderIDArchiveSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type DeleteFilesV3FoldersFolderIDArchiveSecurity struct {
	Option1 *DeleteFilesV3FoldersFolderIDArchiveSecurityOption1 `security:"option"`
	Option2 *DeleteFilesV3FoldersFolderIDArchiveSecurityOption2 `security:"option"`
}

type DeleteFilesV3FoldersFolderIDArchiveRequest struct {
	PathParams DeleteFilesV3FoldersFolderIDArchivePathParams
	Security   DeleteFilesV3FoldersFolderIDArchiveSecurity
}

type DeleteFilesV3FoldersFolderIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
