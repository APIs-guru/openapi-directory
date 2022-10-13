package operations

import (
	"openapi/pkg/models/shared"
)

type DriveFilesDeletePathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveFilesDeleteQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	EnforceSingleParent *bool           `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAllDrives   *bool           `queryParam:"style=form,explode=true,name=supportsAllDrives"`
	SupportsTeamDrives  *bool           `queryParam:"style=form,explode=true,name=supportsTeamDrives"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveFilesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveFilesDeleteSecurity struct {
	Option1 *DriveFilesDeleteSecurityOption1 `security:"option"`
	Option2 *DriveFilesDeleteSecurityOption2 `security:"option"`
	Option3 *DriveFilesDeleteSecurityOption3 `security:"option"`
}

type DriveFilesDeleteRequest struct {
	PathParams  DriveFilesDeletePathParams
	QueryParams DriveFilesDeleteQueryParams
	Security    DriveFilesDeleteSecurity
}

type DriveFilesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
