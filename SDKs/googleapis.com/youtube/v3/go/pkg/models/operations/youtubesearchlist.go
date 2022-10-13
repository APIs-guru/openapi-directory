package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeSearchListChannelTypeEnum string

const (
	YoutubeSearchListChannelTypeEnumChannelTypeUnspecified YoutubeSearchListChannelTypeEnum = "channelTypeUnspecified"
	YoutubeSearchListChannelTypeEnumAny                    YoutubeSearchListChannelTypeEnum = "any"
	YoutubeSearchListChannelTypeEnumShow                   YoutubeSearchListChannelTypeEnum = "show"
)

type YoutubeSearchListEventTypeEnum string

const (
	YoutubeSearchListEventTypeEnumNone      YoutubeSearchListEventTypeEnum = "none"
	YoutubeSearchListEventTypeEnumUpcoming  YoutubeSearchListEventTypeEnum = "upcoming"
	YoutubeSearchListEventTypeEnumLive      YoutubeSearchListEventTypeEnum = "live"
	YoutubeSearchListEventTypeEnumCompleted YoutubeSearchListEventTypeEnum = "completed"
)

type YoutubeSearchListOrderEnum string

const (
	YoutubeSearchListOrderEnumSearchSortUnspecified YoutubeSearchListOrderEnum = "searchSortUnspecified"
	YoutubeSearchListOrderEnumDate                  YoutubeSearchListOrderEnum = "date"
	YoutubeSearchListOrderEnumRating                YoutubeSearchListOrderEnum = "rating"
	YoutubeSearchListOrderEnumViewCount             YoutubeSearchListOrderEnum = "viewCount"
	YoutubeSearchListOrderEnumRelevance             YoutubeSearchListOrderEnum = "relevance"
	YoutubeSearchListOrderEnumTitle                 YoutubeSearchListOrderEnum = "title"
	YoutubeSearchListOrderEnumVideoCount            YoutubeSearchListOrderEnum = "videoCount"
)

type YoutubeSearchListSafeSearchEnum string

const (
	YoutubeSearchListSafeSearchEnumSafeSearchSettingUnspecified YoutubeSearchListSafeSearchEnum = "safeSearchSettingUnspecified"
	YoutubeSearchListSafeSearchEnumNone                         YoutubeSearchListSafeSearchEnum = "none"
	YoutubeSearchListSafeSearchEnumModerate                     YoutubeSearchListSafeSearchEnum = "moderate"
	YoutubeSearchListSafeSearchEnumStrict                       YoutubeSearchListSafeSearchEnum = "strict"
)

type YoutubeSearchListVideoCaptionEnum string

const (
	YoutubeSearchListVideoCaptionEnumVideoCaptionUnspecified YoutubeSearchListVideoCaptionEnum = "videoCaptionUnspecified"
	YoutubeSearchListVideoCaptionEnumAny                     YoutubeSearchListVideoCaptionEnum = "any"
	YoutubeSearchListVideoCaptionEnumClosedCaption           YoutubeSearchListVideoCaptionEnum = "closedCaption"
	YoutubeSearchListVideoCaptionEnumNone                    YoutubeSearchListVideoCaptionEnum = "none"
)

type YoutubeSearchListVideoDefinitionEnum string

const (
	YoutubeSearchListVideoDefinitionEnumAny      YoutubeSearchListVideoDefinitionEnum = "any"
	YoutubeSearchListVideoDefinitionEnumStandard YoutubeSearchListVideoDefinitionEnum = "standard"
	YoutubeSearchListVideoDefinitionEnumHigh     YoutubeSearchListVideoDefinitionEnum = "high"
)

type YoutubeSearchListVideoDimensionEnum string

const (
	YoutubeSearchListVideoDimensionEnumAny    YoutubeSearchListVideoDimensionEnum = "any"
	YoutubeSearchListVideoDimensionEnumTwod   YoutubeSearchListVideoDimensionEnum = "2d"
	YoutubeSearchListVideoDimensionEnumThreed YoutubeSearchListVideoDimensionEnum = "3d"
)

type YoutubeSearchListVideoDurationEnum string

const (
	YoutubeSearchListVideoDurationEnumVideoDurationUnspecified YoutubeSearchListVideoDurationEnum = "videoDurationUnspecified"
	YoutubeSearchListVideoDurationEnumAny                      YoutubeSearchListVideoDurationEnum = "any"
	YoutubeSearchListVideoDurationEnumShort                    YoutubeSearchListVideoDurationEnum = "short"
	YoutubeSearchListVideoDurationEnumMedium                   YoutubeSearchListVideoDurationEnum = "medium"
	YoutubeSearchListVideoDurationEnumLong                     YoutubeSearchListVideoDurationEnum = "long"
)

type YoutubeSearchListVideoEmbeddableEnum string

const (
	YoutubeSearchListVideoEmbeddableEnumVideoEmbeddableUnspecified YoutubeSearchListVideoEmbeddableEnum = "videoEmbeddableUnspecified"
	YoutubeSearchListVideoEmbeddableEnumAny                        YoutubeSearchListVideoEmbeddableEnum = "any"
	YoutubeSearchListVideoEmbeddableEnumTrue                       YoutubeSearchListVideoEmbeddableEnum = "true"
)

type YoutubeSearchListVideoLicenseEnum string

const (
	YoutubeSearchListVideoLicenseEnumAny            YoutubeSearchListVideoLicenseEnum = "any"
	YoutubeSearchListVideoLicenseEnumYoutube        YoutubeSearchListVideoLicenseEnum = "youtube"
	YoutubeSearchListVideoLicenseEnumCreativeCommon YoutubeSearchListVideoLicenseEnum = "creativeCommon"
)

type YoutubeSearchListVideoSyndicatedEnum string

const (
	YoutubeSearchListVideoSyndicatedEnumVideoSyndicatedUnspecified YoutubeSearchListVideoSyndicatedEnum = "videoSyndicatedUnspecified"
	YoutubeSearchListVideoSyndicatedEnumAny                        YoutubeSearchListVideoSyndicatedEnum = "any"
	YoutubeSearchListVideoSyndicatedEnumTrue                       YoutubeSearchListVideoSyndicatedEnum = "true"
)

type YoutubeSearchListVideoTypeEnum string

const (
	YoutubeSearchListVideoTypeEnumVideoTypeUnspecified YoutubeSearchListVideoTypeEnum = "videoTypeUnspecified"
	YoutubeSearchListVideoTypeEnumAny                  YoutubeSearchListVideoTypeEnum = "any"
	YoutubeSearchListVideoTypeEnumMovie                YoutubeSearchListVideoTypeEnum = "movie"
	YoutubeSearchListVideoTypeEnumEpisode              YoutubeSearchListVideoTypeEnum = "episode"
)

type YoutubeSearchListQueryParams struct {
	DollarXgafv            *shared.XgafvEnum                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum                       `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string                               `queryParam:"style=form,explode=true,name=callback"`
	ChannelID              *string                               `queryParam:"style=form,explode=true,name=channelId"`
	ChannelType            *YoutubeSearchListChannelTypeEnum     `queryParam:"style=form,explode=true,name=channelType"`
	EventType              *YoutubeSearchListEventTypeEnum       `queryParam:"style=form,explode=true,name=eventType"`
	Fields                 *string                               `queryParam:"style=form,explode=true,name=fields"`
	ForContentOwner        *bool                                 `queryParam:"style=form,explode=true,name=forContentOwner"`
	ForDeveloper           *bool                                 `queryParam:"style=form,explode=true,name=forDeveloper"`
	ForMine                *bool                                 `queryParam:"style=form,explode=true,name=forMine"`
	Key                    *string                               `queryParam:"style=form,explode=true,name=key"`
	Location               *string                               `queryParam:"style=form,explode=true,name=location"`
	LocationRadius         *string                               `queryParam:"style=form,explode=true,name=locationRadius"`
	MaxResults             *int64                                `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken             *string                               `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string                               `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	Order                  *YoutubeSearchListOrderEnum           `queryParam:"style=form,explode=true,name=order"`
	PageToken              *string                               `queryParam:"style=form,explode=true,name=pageToken"`
	Part                   []string                              `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	PublishedAfter         *string                               `queryParam:"style=form,explode=true,name=publishedAfter"`
	PublishedBefore        *string                               `queryParam:"style=form,explode=true,name=publishedBefore"`
	Q                      *string                               `queryParam:"style=form,explode=true,name=q"`
	QuotaUser              *string                               `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionCode             *string                               `queryParam:"style=form,explode=true,name=regionCode"`
	RelatedToVideoID       *string                               `queryParam:"style=form,explode=true,name=relatedToVideoId"`
	RelevanceLanguage      *string                               `queryParam:"style=form,explode=true,name=relevanceLanguage"`
	SafeSearch             *YoutubeSearchListSafeSearchEnum      `queryParam:"style=form,explode=true,name=safeSearch"`
	TopicID                *string                               `queryParam:"style=form,explode=true,name=topicId"`
	Type                   []string                              `queryParam:"style=form,explode=true,name=type"`
	UploadType             *string                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string                               `queryParam:"style=form,explode=true,name=upload_protocol"`
	VideoCaption           *YoutubeSearchListVideoCaptionEnum    `queryParam:"style=form,explode=true,name=videoCaption"`
	VideoCategoryID        *string                               `queryParam:"style=form,explode=true,name=videoCategoryId"`
	VideoDefinition        *YoutubeSearchListVideoDefinitionEnum `queryParam:"style=form,explode=true,name=videoDefinition"`
	VideoDimension         *YoutubeSearchListVideoDimensionEnum  `queryParam:"style=form,explode=true,name=videoDimension"`
	VideoDuration          *YoutubeSearchListVideoDurationEnum   `queryParam:"style=form,explode=true,name=videoDuration"`
	VideoEmbeddable        *YoutubeSearchListVideoEmbeddableEnum `queryParam:"style=form,explode=true,name=videoEmbeddable"`
	VideoLicense           *YoutubeSearchListVideoLicenseEnum    `queryParam:"style=form,explode=true,name=videoLicense"`
	VideoSyndicated        *YoutubeSearchListVideoSyndicatedEnum `queryParam:"style=form,explode=true,name=videoSyndicated"`
	VideoType              *YoutubeSearchListVideoTypeEnum       `queryParam:"style=form,explode=true,name=videoType"`
}

type YoutubeSearchListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSearchListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSearchListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSearchListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSearchListSecurity struct {
	Option1 *YoutubeSearchListSecurityOption1 `security:"option"`
	Option2 *YoutubeSearchListSecurityOption2 `security:"option"`
	Option3 *YoutubeSearchListSecurityOption3 `security:"option"`
	Option4 *YoutubeSearchListSecurityOption4 `security:"option"`
}

type YoutubeSearchListRequest struct {
	QueryParams YoutubeSearchListQueryParams
	Security    YoutubeSearchListSecurity
}

type YoutubeSearchListResponse struct {
	ContentType        string
	SearchListResponse *shared.SearchListResponse
	StatusCode         int64
}
