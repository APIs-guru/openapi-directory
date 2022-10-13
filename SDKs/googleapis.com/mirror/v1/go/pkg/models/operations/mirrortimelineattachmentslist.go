package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorTimelineAttachmentsListPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type MirrorTimelineAttachmentsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorTimelineAttachmentsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelineAttachmentsListRequest struct {
	PathParams  MirrorTimelineAttachmentsListPathParams
	QueryParams MirrorTimelineAttachmentsListQueryParams
	Security    MirrorTimelineAttachmentsListSecurity
}

type MirrorTimelineAttachmentsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
