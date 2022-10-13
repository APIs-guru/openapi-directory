package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FilesUploadSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostFilesV3FilesUploadSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PostFilesV3FilesUploadSecurity struct {
	Option1 *PostFilesV3FilesUploadSecurityOption1 `security:"option"`
	Option2 *PostFilesV3FilesUploadSecurityOption2 `security:"option"`
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
