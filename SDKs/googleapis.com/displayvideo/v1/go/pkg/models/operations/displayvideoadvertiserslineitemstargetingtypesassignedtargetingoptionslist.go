package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum string

const (
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams struct {
	AdvertiserID  string                                                                                      `pathParam:"style=simple,explode=false,name=advertiserId"`
	LineItemID    string                                                                                      `pathParam:"style=simple,explode=false,name=lineItemId"`
	TargetingType DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest struct {
	PathParams  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams
	QueryParams DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListQueryParams
	Security    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse struct {
	ContentType                                  string
	ListLineItemAssignedTargetingOptionsResponse *shared.ListLineItemAssignedTargetingOptionsResponse
	StatusCode                                   int64
}
