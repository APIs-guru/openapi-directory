package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FilesUploadSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostFilesV3FilesUploadRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security PostFilesV3FilesUploadSecurity
}

type PostFilesV3FilesUploadResponse struct {
	Body        []byte
	ContentType string
	File        *shared.File
	StatusCode  int64
}
