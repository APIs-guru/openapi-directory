package operations

import (
	"openapi/pkg/models/shared"
)

type PutFilesV3FilesFileIDReplacePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type PutFilesV3FilesFileIDReplaceSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
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
