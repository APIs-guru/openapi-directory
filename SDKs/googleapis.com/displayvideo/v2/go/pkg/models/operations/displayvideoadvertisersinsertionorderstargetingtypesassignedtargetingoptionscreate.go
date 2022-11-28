package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum string

const (
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams struct {
	AdvertiserID     string                                                                                              `pathParam:"style=simple,explode=false,name=advertiserId"`
	InsertionOrderID string                                                                                              `pathParam:"style=simple,explode=false,name=insertionOrderId"`
	TargetingType    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams struct {
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

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest struct {
	PathParams  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams
	QueryParams DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateQueryParams
	Request     *shared.AssignedTargetingOptionInput `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse struct {
	AssignedTargetingOption *shared.AssignedTargetingOption
	ContentType             string
	StatusCode              int64
}
