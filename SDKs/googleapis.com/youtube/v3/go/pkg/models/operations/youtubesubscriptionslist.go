package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeSubscriptionsListOrderEnum string

const (
	YoutubeSubscriptionsListOrderEnumSubscriptionOrderUnspecified YoutubeSubscriptionsListOrderEnum = "subscriptionOrderUnspecified"
	YoutubeSubscriptionsListOrderEnumRelevance                    YoutubeSubscriptionsListOrderEnum = "relevance"
	YoutubeSubscriptionsListOrderEnumUnread                       YoutubeSubscriptionsListOrderEnum = "unread"
	YoutubeSubscriptionsListOrderEnumAlphabetical                 YoutubeSubscriptionsListOrderEnum = "alphabetical"
)

type YoutubeSubscriptionsListQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string                            `queryParam:"style=form,explode=true,name=callback"`
	ChannelID                     *string                            `queryParam:"style=form,explode=true,name=channelId"`
	Fields                        *string                            `queryParam:"style=form,explode=true,name=fields"`
	ForChannelID                  *string                            `queryParam:"style=form,explode=true,name=forChannelId"`
	ID                            []string                           `queryParam:"style=form,explode=true,name=id"`
	Key                           *string                            `queryParam:"style=form,explode=true,name=key"`
	MaxResults                    *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	Mine                          *bool                              `queryParam:"style=form,explode=true,name=mine"`
	MyRecentSubscribers           *bool                              `queryParam:"style=form,explode=true,name=myRecentSubscribers"`
	MySubscribers                 *bool                              `queryParam:"style=form,explode=true,name=mySubscribers"`
	OauthToken                    *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string                            `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string                            `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	Order                         *YoutubeSubscriptionsListOrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageToken                     *string                            `queryParam:"style=form,explode=true,name=pageToken"`
	Part                          []string                           `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeSubscriptionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSubscriptionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSubscriptionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSubscriptionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSubscriptionsListSecurity struct {
	Option1 *YoutubeSubscriptionsListSecurityOption1 `security:"option"`
	Option2 *YoutubeSubscriptionsListSecurityOption2 `security:"option"`
	Option3 *YoutubeSubscriptionsListSecurityOption3 `security:"option"`
	Option4 *YoutubeSubscriptionsListSecurityOption4 `security:"option"`
}

type YoutubeSubscriptionsListRequest struct {
	QueryParams YoutubeSubscriptionsListQueryParams
	Security    YoutubeSubscriptionsListSecurity
}

type YoutubeSubscriptionsListResponse struct {
	ContentType              string
	StatusCode               int64
	SubscriptionListResponse *shared.SubscriptionListResponse
}
