package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum string

const (
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeChannel                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeApp                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeURL                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeGender                       DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeViewability                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeCategory                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeExchange                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypePoi                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOmid                         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams struct {
	PartnerID     string                                                                            `pathParam:"style=simple,explode=false,name=partnerId"`
	TargetingType DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams struct {
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

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest struct {
	PathParams  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreatePathParams
	QueryParams DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateQueryParams
	Request     *shared.AssignedTargetingOption `request:"mediaType=application/json"`
	Security    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse struct {
	AssignedTargetingOption *shared.AssignedTargetingOption
	ContentType             string
	StatusCode              int64
}
