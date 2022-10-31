package operations

import (
	"openapi/pkg/models/shared"
)

type DriveCommentsUpdatePathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
	FileID    string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveCommentsUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveCommentsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsUpdateSecurity struct {
	Option1 *DriveCommentsUpdateSecurityOption1 `security:"option"`
	Option2 *DriveCommentsUpdateSecurityOption2 `security:"option"`
}

type DriveCommentsUpdateRequest struct {
	PathParams  DriveCommentsUpdatePathParams
	QueryParams DriveCommentsUpdateQueryParams
	Request     *shared.Comment `request:"mediaType=application/json"`
	Security    DriveCommentsUpdateSecurity
}

type DriveCommentsUpdateResponse struct {
	Comment     *shared.Comment
	ContentType string
	StatusCode  int64
}
