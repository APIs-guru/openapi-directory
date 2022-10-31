package operations

import (
	"openapi/pkg/models/shared"
)

type DriveCommentsListPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=fileId"`
}

type DriveCommentsListQueryParams struct {
	Alt            *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields         *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludeDeleted *bool           `queryParam:"style=form,explode=true,name=includeDeleted"`
	Key            *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdatedMin     *string         `queryParam:"style=form,explode=true,name=updatedMin"`
	UserIP         *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveCommentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveCommentsListSecurity struct {
	Option1 *DriveCommentsListSecurityOption1 `security:"option"`
	Option2 *DriveCommentsListSecurityOption2 `security:"option"`
	Option3 *DriveCommentsListSecurityOption3 `security:"option"`
}

type DriveCommentsListRequest struct {
	PathParams  DriveCommentsListPathParams
	QueryParams DriveCommentsListQueryParams
	Security    DriveCommentsListSecurity
}

type DriveCommentsListResponse struct {
	CommentList *shared.CommentList
	ContentType string
	StatusCode  int64
}
