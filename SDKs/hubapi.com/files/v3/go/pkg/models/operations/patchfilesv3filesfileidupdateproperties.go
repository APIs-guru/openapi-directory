package operations

import (
	"openapi/pkg/models/shared"
)

type PatchFilesV3FilesFileIDUpdatePropertiesPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PatchFilesV3FilesFileIDUpdatePropertiesSecurity struct {
	Option1 *PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption1 `security:"option"`
	Option2 *PatchFilesV3FilesFileIDUpdatePropertiesSecurityOption2 `security:"option"`
}

type PatchFilesV3FilesFileIDUpdatePropertiesRequest struct {
	PathParams PatchFilesV3FilesFileIDUpdatePropertiesPathParams
	Request    shared.FileUpdateInput `request:"mediaType=application/json"`
	Security   PatchFilesV3FilesFileIDUpdatePropertiesSecurity
}

type PatchFilesV3FilesFileIDUpdatePropertiesResponse struct {
	Body        []byte
	ContentType string
	File        *shared.File
	StatusCode  int64
}
