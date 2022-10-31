package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveBroadcastsListBroadcastStatusEnum string

const (
	YoutubeLiveBroadcastsListBroadcastStatusEnumBroadcastStatusFilterUnspecified YoutubeLiveBroadcastsListBroadcastStatusEnum = "broadcastStatusFilterUnspecified"
	YoutubeLiveBroadcastsListBroadcastStatusEnumAll                              YoutubeLiveBroadcastsListBroadcastStatusEnum = "all"
	YoutubeLiveBroadcastsListBroadcastStatusEnumActive                           YoutubeLiveBroadcastsListBroadcastStatusEnum = "active"
	YoutubeLiveBroadcastsListBroadcastStatusEnumUpcoming                         YoutubeLiveBroadcastsListBroadcastStatusEnum = "upcoming"
	YoutubeLiveBroadcastsListBroadcastStatusEnumCompleted                        YoutubeLiveBroadcastsListBroadcastStatusEnum = "completed"
)

type YoutubeLiveBroadcastsListBroadcastTypeEnum string

const (
	YoutubeLiveBroadcastsListBroadcastTypeEnumBroadcastTypeFilterUnspecified YoutubeLiveBroadcastsListBroadcastTypeEnum = "broadcastTypeFilterUnspecified"
	YoutubeLiveBroadcastsListBroadcastTypeEnumAll                            YoutubeLiveBroadcastsListBroadcastTypeEnum = "all"
	YoutubeLiveBroadcastsListBroadcastTypeEnumEvent                          YoutubeLiveBroadcastsListBroadcastTypeEnum = "event"
	YoutubeLiveBroadcastsListBroadcastTypeEnumPersistent                     YoutubeLiveBroadcastsListBroadcastTypeEnum = "persistent"
)

type YoutubeLiveBroadcastsListQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	BroadcastStatus               *YoutubeLiveBroadcastsListBroadcastStatusEnum `queryParam:"style=form,explode=true,name=broadcastStatus"`
	BroadcastType                 *YoutubeLiveBroadcastsListBroadcastTypeEnum   `queryParam:"style=form,explode=true,name=broadcastType"`
	Callback                      *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string                                       `queryParam:"style=form,explode=true,name=fields"`
	ID                            []string                                      `queryParam:"style=form,explode=true,name=id"`
	Key                           *string                                       `queryParam:"style=form,explode=true,name=key"`
	MaxResults                    *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	Mine                          *bool                                         `queryParam:"style=form,explode=true,name=mine"`
	OauthToken                    *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string                                       `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string                                       `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	PageToken                     *string                                       `queryParam:"style=form,explode=true,name=pageToken"`
	Part                          []string                                      `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveBroadcastsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsListSecurity struct {
	Option1 *YoutubeLiveBroadcastsListSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveBroadcastsListSecurityOption2 `security:"option"`
	Option3 *YoutubeLiveBroadcastsListSecurityOption3 `security:"option"`
}

type YoutubeLiveBroadcastsListRequest struct {
	QueryParams YoutubeLiveBroadcastsListQueryParams
	Security    YoutubeLiveBroadcastsListSecurity
}

type YoutubeLiveBroadcastsListResponse struct {
	ContentType               string
	LiveBroadcastListResponse *shared.LiveBroadcastListResponse
	StatusCode                int64
}
