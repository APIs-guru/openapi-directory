package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesExportPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesExportQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MimeType    string          `queryParam:"style=form,explode=true,name=mimeType"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesExportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesExportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesExportSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesExportSecurity struct {
	Option1 *DriveFilesExportSecurityOption1 `security:"option"`
	Option2 *DriveFilesExportSecurityOption2 `security:"option"`
	Option3 *DriveFilesExportSecurityOption3 `security:"option"`
}

type DriveFilesExportRequest struct {
	PathParams  DriveFilesExportPathParams
	QueryParams DriveFilesExportQueryParams
	Security    DriveFilesExportSecurity
}

type DriveFilesExportResponse struct {
	ContentType string
	StatusCode  int64
}
