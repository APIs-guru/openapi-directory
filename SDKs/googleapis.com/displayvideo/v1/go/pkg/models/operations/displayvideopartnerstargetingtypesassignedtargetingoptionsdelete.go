package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum string

const (
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUnspecified                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeChannel                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAppCategory                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeApp                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_APP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeURL                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_URL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDayAndTime                   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAgeRange                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeRegionalLocationList         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeProximityLocationList        DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGender                       DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeVideoPlayerSize              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUserRewardedContent          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeParentalStatus               DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentInstreamPosition      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentOutstreamPosition     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceType                   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudienceGroup                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBrowser                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeHouseholdIncome              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOnScreenPosition             DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeThirdPartyVerifier           DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeEnvironment                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCarrierAndIsp                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOperatingSystem              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceMakeModel              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeKeyword                      DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNegativeKeywordList          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeViewability                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCategory                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySource              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeLanguage                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeGeoRegion                    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeInventorySourceGroup         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeExchange                     DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeSubExchange                  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypePoi                          DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_POI"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBusinessChain                DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentDuration              DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentStreamType            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeNativeContentPosition        DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeOmid                         DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_OMID"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeAudioContentType             DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentGenre                 DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams struct {
	AssignedTargetingOptionID string                                                                            `pathParam:"style=simple,explode=false,name=assignedTargetingOptionId"`
	PartnerID                 string                                                                            `pathParam:"style=simple,explode=false,name=partnerId"`
	TargetingType             DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum `pathParam:"style=simple,explode=false,name=targetingType"`
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams struct {
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

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest struct {
	PathParams  DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeletePathParams
	QueryParams DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteQueryParams
	Security    DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity
}

type DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
