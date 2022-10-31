package operations

import (
	"openapi/pkg/models/shared"
)

type PutFilesV3FilesFileIDReplacePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type PutFilesV3FilesFileIDReplaceSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PutFilesV3FilesFileIDReplaceSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PutFilesV3FilesFileIDReplaceSecurity struct {
	Option1 *PutFilesV3FilesFileIDReplaceSecurityOption1 `security:"option"`
	Option2 *PutFilesV3FilesFileIDReplaceSecurityOption2 `security:"option"`
}

type PutFilesV3FilesFileIDReplaceRequest struct {
	PathParams PutFilesV3FilesFileIDReplacePathParams
	Request    *interface{} `request:"mediaType=multipart/form-data"`
	Security   PutFilesV3FilesFileIDReplaceSecurity
}

type PutFilesV3FilesFileIDReplaceResponse struct {
	Body        []byte
	ContentType string
	File        *shared.File
	StatusCode  int64
}
