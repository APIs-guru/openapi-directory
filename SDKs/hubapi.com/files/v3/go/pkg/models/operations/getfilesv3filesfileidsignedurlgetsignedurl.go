package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum string

const (
	GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnumThumb   GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum = "thumb"
	GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnumIcon    GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum = "icon"
	GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnumMedium  GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum = "medium"
	GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnumPreview GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum = "preview"
)

type GetFilesV3FilesFileIDSignedURLGetSignedURLQueryParams struct {
	ExpirationSeconds *int64                                              `queryParam:"style=form,explode=true,name=expirationSeconds"`
	Size              *GetFilesV3FilesFileIDSignedURLGetSignedURLSizeEnum `queryParam:"style=form,explode=true,name=size"`
	Upscale           *bool                                               `queryParam:"style=form,explode=true,name=upscale"`
}

type GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FilesFileIDSignedURLGetSignedURLRequest struct {
	PathParams  GetFilesV3FilesFileIDSignedURLGetSignedURLPathParams
	QueryParams GetFilesV3FilesFileIDSignedURLGetSignedURLQueryParams
	Security    GetFilesV3FilesFileIDSignedURLGetSignedURLSecurity
}

type GetFilesV3FilesFileIDSignedURLGetSignedURLResponse struct {
	Body        []byte
	ContentType string
	SignedURL   *shared.SignedURL
	StatusCode  int64
}
