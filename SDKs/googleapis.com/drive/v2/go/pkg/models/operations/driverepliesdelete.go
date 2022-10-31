package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRepliesDeletePathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
	FileID    string `pathParam:"style=simple,explode=false,name=fileId"`
	ReplyID   string `pathParam:"style=simple,explode=false,name=replyId"`
}

type DriveRepliesDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRepliesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesDeleteSecurity struct {
	Option1 *DriveRepliesDeleteSecurityOption1 `security:"option"`
	Option2 *DriveRepliesDeleteSecurityOption2 `security:"option"`
}

type DriveRepliesDeleteRequest struct {
	PathParams  DriveRepliesDeletePathParams
	QueryParams DriveRepliesDeleteQueryParams
	Security    DriveRepliesDeleteSecurity
}

type DriveRepliesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
