package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FoldersCreateSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostFilesV3FoldersCreateRequest struct {
	Request  shared.FolderInput `request:"mediaType=application/json"`
	Security PostFilesV3FoldersCreateSecurity
}

type PostFilesV3FoldersCreateResponse struct {
	Body        []byte
	ContentType string
	Folder      *shared.Folder
	StatusCode  int64
}
