package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum string

const (
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams struct {
	AdvertiserID              string                                                                                              `pathParam:"style=simple,explode=false,name=advertiserId"`
	AssignedTargetingOptionID string                                                                                              `pathParam:"style=simple,explode=false,name=assignedTargetingOptionId"`
	InsertionOrderID          string                                                                                              `pathParam:"style=simple,explode=false,name=insertionOrderId"`
	TargetingType             DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams struct {
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

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest struct {
	PathParams  DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams
	QueryParams DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteQueryParams
	Security    DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity
}

type DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
