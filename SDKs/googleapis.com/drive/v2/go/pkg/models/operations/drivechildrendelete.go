package operations

import (
	"openapi/pkg/models/shared"
)

type DriveChildrenDeletePathParams struct {
	ChildID  string `pathParam:"style=simple,explode=false,name=childId"`
	FolderID string `pathParam:"style=simple,explode=false,name=folderId"`
}

type DriveChildrenDeleteQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	EnforceSingleParent *bool           `queryParam:"style=form,explode=true,name=enforceSingleParent"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveChildrenDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChildrenDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChildrenDeleteSecurity struct {
	Option1 *DriveChildrenDeleteSecurityOption1 `security:"option"`
	Option2 *DriveChildrenDeleteSecurityOption2 `security:"option"`
}

type DriveChildrenDeleteRequest struct {
	PathParams  DriveChildrenDeletePathParams
	QueryParams DriveChildrenDeleteQueryParams
	Security    DriveChildrenDeleteSecurity
}

type DriveChildrenDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
