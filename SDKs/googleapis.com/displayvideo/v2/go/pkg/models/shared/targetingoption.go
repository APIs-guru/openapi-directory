package shared

type TargetingOptionTargetingTypeEnum string

const (
	TargetingOptionTargetingTypeEnumTargetingTypeUnspecified                  TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	TargetingOptionTargetingTypeEnumTargetingTypeChannel                      TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	TargetingOptionTargetingTypeEnumTargetingTypeAppCategory                  TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	TargetingOptionTargetingTypeEnumTargetingTypeApp                          TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_APP"
	TargetingOptionTargetingTypeEnumTargetingTypeURL                          TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_URL"
	TargetingOptionTargetingTypeEnumTargetingTypeDayAndTime                   TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	TargetingOptionTargetingTypeEnumTargetingTypeAgeRange                     TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	TargetingOptionTargetingTypeEnumTargetingTypeRegionalLocationList         TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	TargetingOptionTargetingTypeEnumTargetingTypeProximityLocationList        TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	TargetingOptionTargetingTypeEnumTargetingTypeGender                       TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	TargetingOptionTargetingTypeEnumTargetingTypeVideoPlayerSize              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	TargetingOptionTargetingTypeEnumTargetingTypeUserRewardedContent          TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	TargetingOptionTargetingTypeEnumTargetingTypeParentalStatus               TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	TargetingOptionTargetingTypeEnumTargetingTypeContentInstreamPosition      TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	TargetingOptionTargetingTypeEnumTargetingTypeContentOutstreamPosition     TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	TargetingOptionTargetingTypeEnumTargetingTypeDeviceType                   TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	TargetingOptionTargetingTypeEnumTargetingTypeAudienceGroup                TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	TargetingOptionTargetingTypeEnumTargetingTypeBrowser                      TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	TargetingOptionTargetingTypeEnumTargetingTypeHouseholdIncome              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	TargetingOptionTargetingTypeEnumTargetingTypeOnScreenPosition             TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	TargetingOptionTargetingTypeEnumTargetingTypeThirdPartyVerifier           TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	TargetingOptionTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	TargetingOptionTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	TargetingOptionTargetingTypeEnumTargetingTypeEnvironment                  TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	TargetingOptionTargetingTypeEnumTargetingTypeCarrierAndIsp                TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	TargetingOptionTargetingTypeEnumTargetingTypeOperatingSystem              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	TargetingOptionTargetingTypeEnumTargetingTypeDeviceMakeModel              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	TargetingOptionTargetingTypeEnumTargetingTypeKeyword                      TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	TargetingOptionTargetingTypeEnumTargetingTypeNegativeKeywordList          TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	TargetingOptionTargetingTypeEnumTargetingTypeViewability                  TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	TargetingOptionTargetingTypeEnumTargetingTypeCategory                     TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	TargetingOptionTargetingTypeEnumTargetingTypeInventorySource              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	TargetingOptionTargetingTypeEnumTargetingTypeLanguage                     TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	TargetingOptionTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	TargetingOptionTargetingTypeEnumTargetingTypeGeoRegion                    TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	TargetingOptionTargetingTypeEnumTargetingTypeInventorySourceGroup         TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	TargetingOptionTargetingTypeEnumTargetingTypeExchange                     TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	TargetingOptionTargetingTypeEnumTargetingTypeSubExchange                  TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	TargetingOptionTargetingTypeEnumTargetingTypePoi                          TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_POI"
	TargetingOptionTargetingTypeEnumTargetingTypeBusinessChain                TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	TargetingOptionTargetingTypeEnumTargetingTypeContentDuration              TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	TargetingOptionTargetingTypeEnumTargetingTypeContentStreamType            TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	TargetingOptionTargetingTypeEnumTargetingTypeNativeContentPosition        TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	TargetingOptionTargetingTypeEnumTargetingTypeOmid                         TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_OMID"
	TargetingOptionTargetingTypeEnumTargetingTypeAudioContentType             TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	TargetingOptionTargetingTypeEnumTargetingTypeContentGenre                 TargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type TargetingOption struct {
	AgeRangeDetails                 *AgeRangeTargetingOptionDetails                 `json:"ageRangeDetails,omitempty"`
	AppCategoryDetails              *AppCategoryTargetingOptionDetails              `json:"appCategoryDetails,omitempty"`
	AudioContentTypeDetails         *AudioContentTypeTargetingOptionDetails         `json:"audioContentTypeDetails,omitempty"`
	AuthorizedSellerStatusDetails   *AuthorizedSellerStatusTargetingOptionDetails   `json:"authorizedSellerStatusDetails,omitempty"`
	BrowserDetails                  *BrowserTargetingOptionDetails                  `json:"browserDetails,omitempty"`
	BusinessChainDetails            *BusinessChainTargetingOptionDetails            `json:"businessChainDetails,omitempty"`
	CarrierAndIspDetails            *CarrierAndIspTargetingOptionDetails            `json:"carrierAndIspDetails,omitempty"`
	CategoryDetails                 *CategoryTargetingOptionDetails                 `json:"categoryDetails,omitempty"`
	ContentDurationDetails          *ContentDurationTargetingOptionDetails          `json:"contentDurationDetails,omitempty"`
	ContentGenreDetails             *ContentGenreTargetingOptionDetails             `json:"contentGenreDetails,omitempty"`
	ContentInstreamPositionDetails  *ContentInstreamPositionTargetingOptionDetails  `json:"contentInstreamPositionDetails,omitempty"`
	ContentOutstreamPositionDetails *ContentOutstreamPositionTargetingOptionDetails `json:"contentOutstreamPositionDetails,omitempty"`
	ContentStreamTypeDetails        *ContentStreamTypeTargetingOptionDetails        `json:"contentStreamTypeDetails,omitempty"`
	DeviceMakeModelDetails          *DeviceMakeModelTargetingOptionDetails          `json:"deviceMakeModelDetails,omitempty"`
	DeviceTypeDetails               *DeviceTypeTargetingOptionDetails               `json:"deviceTypeDetails,omitempty"`
	DigitalContentLabelDetails      *DigitalContentLabelTargetingOptionDetails      `json:"digitalContentLabelDetails,omitempty"`
	EnvironmentDetails              *EnvironmentTargetingOptionDetails              `json:"environmentDetails,omitempty"`
	ExchangeDetails                 *ExchangeTargetingOptionDetails                 `json:"exchangeDetails,omitempty"`
	GenderDetails                   *GenderTargetingOptionDetails                   `json:"genderDetails,omitempty"`
	GeoRegionDetails                *GeoRegionTargetingOptionDetails                `json:"geoRegionDetails,omitempty"`
	HouseholdIncomeDetails          *HouseholdIncomeTargetingOptionDetails          `json:"householdIncomeDetails,omitempty"`
	LanguageDetails                 *LanguageTargetingOptionDetails                 `json:"languageDetails,omitempty"`
	Name                            *string                                         `json:"name,omitempty"`
	NativeContentPositionDetails    *NativeContentPositionTargetingOptionDetails    `json:"nativeContentPositionDetails,omitempty"`
	OmidDetails                     *OmidTargetingOptionDetails                     `json:"omidDetails,omitempty"`
	OnScreenPositionDetails         *OnScreenPositionTargetingOptionDetails         `json:"onScreenPositionDetails,omitempty"`
	OperatingSystemDetails          *OperatingSystemTargetingOptionDetails          `json:"operatingSystemDetails,omitempty"`
	ParentalStatusDetails           *ParentalStatusTargetingOptionDetails           `json:"parentalStatusDetails,omitempty"`
	PoiDetails                      *PoiTargetingOptionDetails                      `json:"poiDetails,omitempty"`
	SensitiveCategoryDetails        *SensitiveCategoryTargetingOptionDetails        `json:"sensitiveCategoryDetails,omitempty"`
	SubExchangeDetails              *SubExchangeTargetingOptionDetails              `json:"subExchangeDetails,omitempty"`
	TargetingOptionID               *string                                         `json:"targetingOptionId,omitempty"`
	TargetingType                   *TargetingOptionTargetingTypeEnum               `json:"targetingType,omitempty"`
	UserRewardedContentDetails      *UserRewardedContentTargetingOptionDetails      `json:"userRewardedContentDetails,omitempty"`
	VideoPlayerSizeDetails          *VideoPlayerSizeTargetingOptionDetails          `json:"videoPlayerSizeDetails,omitempty"`
	ViewabilityDetails              *ViewabilityTargetingOptionDetails              `json:"viewabilityDetails,omitempty"`
}
