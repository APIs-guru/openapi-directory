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

type GetFilesV3FoldersFolderPathGetByPathSecurityOption1 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderPathGetByPathSecurityOption2 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetFilesV3FoldersFolderPathGetByPathSecurityOption3 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderPathGetByPathSecurity struct {
	Option1 *GetFilesV3FoldersFolderPathGetByPathSecurityOption1 `security:"option"`
	Option2 *GetFilesV3FoldersFolderPathGetByPathSecurityOption2 `security:"option"`
	Option3 *GetFilesV3FoldersFolderPathGetByPathSecurityOption3 `security:"option"`
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
