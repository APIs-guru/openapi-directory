package operations

import (
	"openapi/pkg/models/shared"
)

type DriveRepliesListPathParams struct {
	CommentID string `pathParam:"style=simple,explode=false,name=commentId"`
	FileID    string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveRepliesListQueryParams struct {
	Alt            *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields         *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludeDeleted *bool           `queryParam:"style=form,explode=true,name=includeDeleted"`
	Key            *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP         *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveRepliesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveRepliesListSecurity struct {
	Option1 *DriveRepliesListSecurityOption1 `security:"option"`
	Option2 *DriveRepliesListSecurityOption2 `security:"option"`
	Option3 *DriveRepliesListSecurityOption3 `security:"option"`
}

type DriveRepliesListRequest struct {
	PathParams  DriveRepliesListPathParams
	QueryParams DriveRepliesListQueryParams
	Security    DriveRepliesListSecurity
}

type DriveRepliesListResponse struct {
	CommentReplyList *shared.CommentReplyList
	ContentType      string
	StatusCode       int64
}
