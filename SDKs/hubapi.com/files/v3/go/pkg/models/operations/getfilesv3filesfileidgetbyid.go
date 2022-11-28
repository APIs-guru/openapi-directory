package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FilesFileIDGetByIDPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type GetFilesV3FilesFileIDGetByIDQueryParams struct {
	Properties []string `queryParam:"style=form,explode=true,name=properties"`
}

type GetFilesV3FilesFileIDGetByIDSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FilesFileIDGetByIDRequest struct {
	PathParams  GetFilesV3FilesFileIDGetByIDPathParams
	QueryParams GetFilesV3FilesFileIDGetByIDQueryParams
	Security    GetFilesV3FilesFileIDGetByIDSecurity
}

type GetFilesV3FilesFileIDGetByIDResponse struct {
	Body        []byte
	ContentType string
	File        *shared.File
	StatusCode  int64
}
