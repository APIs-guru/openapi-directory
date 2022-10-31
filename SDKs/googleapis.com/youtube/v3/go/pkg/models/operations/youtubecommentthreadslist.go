package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeCommentThreadsListModerationStatusEnum string

const (
	YoutubeCommentThreadsListModerationStatusEnumPublished     YoutubeCommentThreadsListModerationStatusEnum = "published"
	YoutubeCommentThreadsListModerationStatusEnumHeldForReview YoutubeCommentThreadsListModerationStatusEnum = "heldForReview"
	YoutubeCommentThreadsListModerationStatusEnumLikelySpam    YoutubeCommentThreadsListModerationStatusEnum = "likelySpam"
	YoutubeCommentThreadsListModerationStatusEnumRejected      YoutubeCommentThreadsListModerationStatusEnum = "rejected"
)

type YoutubeCommentThreadsListOrderEnum string

const (
	YoutubeCommentThreadsListOrderEnumOrderUnspecified YoutubeCommentThreadsListOrderEnum = "orderUnspecified"
	YoutubeCommentThreadsListOrderEnumTime             YoutubeCommentThreadsListOrderEnum = "time"
	YoutubeCommentThreadsListOrderEnumRelevance        YoutubeCommentThreadsListOrderEnum = "relevance"
)

type YoutubeCommentThreadsListTextFormatEnum string

const (
	YoutubeCommentThreadsListTextFormatEnumTextFormatUnspecified YoutubeCommentThreadsListTextFormatEnum = "textFormatUnspecified"
	YoutubeCommentThreadsListTextFormatEnumHTML                  YoutubeCommentThreadsListTextFormatEnum = "html"
	YoutubeCommentThreadsListTextFormatEnumPlainText             YoutubeCommentThreadsListTextFormatEnum = "plainText"
)

type YoutubeCommentThreadsListQueryParams struct {
	DollarXgafv                  *shared.XgafvEnum                              `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                  *string                                        `queryParam:"style=form,explode=true,name=access_token"`
	AllThreadsRelatedToChannelID *string                                        `queryParam:"style=form,explode=true,name=allThreadsRelatedToChannelId"`
	Alt                          *shared.AltEnum                                `queryParam:"style=form,explode=true,name=alt"`
	Callback                     *string                                        `queryParam:"style=form,explode=true,name=callback"`
	ChannelID                    *string                                        `queryParam:"style=form,explode=true,name=channelId"`
	Fields                       *string                                        `queryParam:"style=form,explode=true,name=fields"`
	ID                           []string                                       `queryParam:"style=form,explode=true,name=id"`
	Key                          *string                                        `queryParam:"style=form,explode=true,name=key"`
	MaxResults                   *int64                                         `queryParam:"style=form,explode=true,name=maxResults"`
	ModerationStatus             *YoutubeCommentThreadsListModerationStatusEnum `queryParam:"style=form,explode=true,name=moderationStatus"`
	OauthToken                   *string                                        `queryParam:"style=form,explode=true,name=oauth_token"`
	Order                        *YoutubeCommentThreadsListOrderEnum            `queryParam:"style=form,explode=true,name=order"`
	PageToken                    *string                                        `queryParam:"style=form,explode=true,name=pageToken"`
	Part                         []string                                       `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                  *bool                                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                    *string                                        `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchTerms                  *string                                        `queryParam:"style=form,explode=true,name=searchTerms"`
	TextFormat                   *YoutubeCommentThreadsListTextFormatEnum       `queryParam:"style=form,explode=true,name=textFormat"`
	UploadType                   *string                                        `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol               *string                                        `queryParam:"style=form,explode=true,name=upload_protocol"`
	VideoID                      *string                                        `queryParam:"style=form,explode=true,name=videoId"`
}

type YoutubeCommentThreadsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCommentThreadsListRequest struct {
	QueryParams YoutubeCommentThreadsListQueryParams
	Security    YoutubeCommentThreadsListSecurity
}

type YoutubeCommentThreadsListResponse struct {
	CommentThreadListResponse *shared.CommentThreadListResponse
	ContentType               string
	StatusCode                int64
}
