package operations

import (
	"openapi/pkg/models/shared"
)

type DriveCommentsInsertPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveCommentsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveCommentsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsInsertSecurity struct {
	Option1 *DriveCommentsInsertSecurityOption1 `security:"option"`
	Option2 *DriveCommentsInsertSecurityOption2 `security:"option"`
}

type DriveCommentsInsertRequest struct {
	PathParams  DriveCommentsInsertPathParams
	QueryParams DriveCommentsInsertQueryParams
	Request     *shared.Comment `request:"mediaType=application/json"`
	Security    DriveCommentsInsertSecurity
}

type DriveCommentsInsertResponse struct {
	Comment     *shared.Comment
	ContentType string
	StatusCode  int64
}
