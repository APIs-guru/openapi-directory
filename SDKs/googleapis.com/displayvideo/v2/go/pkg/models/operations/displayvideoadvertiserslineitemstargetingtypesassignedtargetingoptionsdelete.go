package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum string

const (
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeChannel                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeApp                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeURL                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGender                       DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeViewability                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCategory                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeExchange                     DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypePoi                          DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOmid                         DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams struct {
	AdvertiserID              string                                                                                        `pathParam:"style=simple,explode=false,name=advertiserId"`
	AssignedTargetingOptionID string                                                                                        `pathParam:"style=simple,explode=false,name=assignedTargetingOptionId"`
	LineItemID                string                                                                                        `pathParam:"style=simple,explode=false,name=lineItemId"`
	TargetingType             DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteQueryParams struct {
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

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest struct {
	PathParams  DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams
	QueryParams DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteQueryParams
	Security    DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity
}

type DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
