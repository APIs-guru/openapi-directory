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

type GetFilesV3FoldersFolderIDGetByIDSecurityOption1 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderIDGetByIDSecurityOption2 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetFilesV3FoldersFolderIDGetByIDSecurityOption3 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetFilesV3FoldersFolderIDGetByIDSecurity struct {
	Option1 *GetFilesV3FoldersFolderIDGetByIDSecurityOption1 `security:"option"`
	Option2 *GetFilesV3FoldersFolderIDGetByIDSecurityOption2 `security:"option"`
	Option3 *GetFilesV3FoldersFolderIDGetByIDSecurityOption3 `security:"option"`
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
