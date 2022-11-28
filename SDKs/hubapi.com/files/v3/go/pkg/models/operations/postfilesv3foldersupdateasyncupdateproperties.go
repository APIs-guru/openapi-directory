package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest struct {
	Request  shared.FolderUpdateInput `request:"mediaType=application/json"`
	Security PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity
}

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse struct {
	Body                    []byte
	ContentType             string
	FolderUpdateTaskLocator *shared.FolderUpdateTaskLocator
	StatusCode              int64
}
