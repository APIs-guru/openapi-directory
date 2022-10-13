package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRepliesInsertPathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
	FileID    string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveRepliesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRepliesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesInsertSecurity struct {
	Option1 *DriveRepliesInsertSecurityOption1 `security:"option"`
	Option2 *DriveRepliesInsertSecurityOption2 `security:"option"`
}

type DriveRepliesInsertRequest struct {
	PathParams  DriveRepliesInsertPathParams
	QueryParams DriveRepliesInsertQueryParams
	Request     *shared.CommentReply `request:"mediaType=application/json"`
	Security    DriveRepliesInsertSecurity
}

type DriveRepliesInsertResponse struct {
	CommentReply *shared.CommentReply
	ContentType  string
	StatusCode   int64
}
