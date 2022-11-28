package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FoldersFolderIDGetByIDPathParams struct {
	FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
}

type GetFilesV3FoldersFolderIDGetByIDQueryParams struct {
	Properties []string `queryParam:"style=form,explode=true,name=properties"`
}

type GetFilesV3FoldersFolderIDGetByIDSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderIDGetByIDRequest struct {
	PathParams  GetFilesV3FoldersFolderIDGetByIDPathParams
	QueryParams GetFilesV3FoldersFolderIDGetByIDQueryParams
	Security    GetFilesV3FoldersFolderIDGetByIDSecurity
}

type GetFilesV3FoldersFolderIDGetByIDResponse struct {
	Body        []byte
	ContentType string
	Folder      *shared.Folder
	StatusCode  int64
}
