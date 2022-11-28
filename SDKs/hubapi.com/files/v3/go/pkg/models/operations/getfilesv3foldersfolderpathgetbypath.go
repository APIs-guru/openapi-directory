package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FoldersFolderPathGetByPathPathParams struct {
	FolderPath string `pathParam:"style=simple,explode=false,name=folderPath"`
}

type GetFilesV3FoldersFolderPathGetByPathQueryParams struct {
	Properties []string `queryParam:"style=form,explode=true,name=properties"`
}

type GetFilesV3FoldersFolderPathGetByPathSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderPathGetByPathRequest struct {
	PathParams  GetFilesV3FoldersFolderPathGetByPathPathParams
	QueryParams GetFilesV3FoldersFolderPathGetByPathQueryParams
	Security    GetFilesV3FoldersFolderPathGetByPathSecurity
}

type GetFilesV3FoldersFolderPathGetByPathResponse struct {
	Body        []byte
	ContentType string
	Folder      *shared.Folder
	StatusCode  int64
}
