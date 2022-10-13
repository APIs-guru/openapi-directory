package operations

import (
	"openapi/pkg/models/shared"
)

type DriveParentsInsertPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveParentsInsertQueryParams struct {
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

type DriveParentsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveParentsInsertSecurity struct {
	Option1 *DriveParentsInsertSecurityOption1 `security:"option"`
	Option2 *DriveParentsInsertSecurityOption2 `security:"option"`
	Option3 *DriveParentsInsertSecurityOption3 `security:"option"`
}

type DriveParentsInsertRequest struct {
	PathParams  DriveParentsInsertPathParams
	QueryParams DriveParentsInsertQueryParams
	Request     *shared.ParentReference `request:"mediaType=application/json"`
	Security    DriveParentsInsertSecurity
}

type DriveParentsInsertResponse struct {
	ContentType     string
	ParentReference *shared.ParentReference
	StatusCode      int64
}
