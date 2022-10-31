package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum string

const (
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams struct {
	AdvertiserID              string                                                                            `pathParam:"style=simple,explode=false,name=advertiserId"`
	AssignedTargetingOptionID string                                                                            `pathParam:"style=simple,explode=false,name=assignedTargetingOptionId"`
	TargetingType             DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest struct {
	PathParams  DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetPathParams
	QueryParams DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetQueryParams
	Security    DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity
}

type DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse struct {
	AssignedTargetingOption *shared.AssignedTargetingOption
	ContentType             string
	StatusCode              int64
}
