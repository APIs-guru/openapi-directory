package operations

import (
	"openapi/pkg/models/shared"
)

type PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLRequest struct {
	Request  shared.ImportFromURLInput `request:"mediaType=application/json"`
	Security PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLResponse struct {
	Body                     []byte
	ContentType              string
	ImportFromURLTaskLocator *shared.ImportFromURLTaskLocator
	StatusCode               int64
}
