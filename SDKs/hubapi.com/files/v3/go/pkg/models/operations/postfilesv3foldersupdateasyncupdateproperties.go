package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity struct {
	Option1 *PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1 `security:"option"`
	Option2 *PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2 `security:"option"`
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
