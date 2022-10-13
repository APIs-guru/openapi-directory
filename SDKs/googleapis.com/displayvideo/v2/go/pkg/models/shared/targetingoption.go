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
	AgeRangeDetails                 *AgeRangeTargetingOptionDetails                 `json:"ageRangeDetails"`
	AppCategoryDetails              *AppCategoryTargetingOptionDetails              `json:"appCategoryDetails"`
	AudioContentTypeDetails         *AudioContentTypeTargetingOptionDetails         `json:"audioContentTypeDetails"`
	AuthorizedSellerStatusDetails   *AuthorizedSellerStatusTargetingOptionDetails   `json:"authorizedSellerStatusDetails"`
	BrowserDetails                  *BrowserTargetingOptionDetails                  `json:"browserDetails"`
	BusinessChainDetails            *BusinessChainTargetingOptionDetails            `json:"businessChainDetails"`
	CarrierAndIspDetails            *CarrierAndIspTargetingOptionDetails            `json:"carrierAndIspDetails"`
	CategoryDetails                 *CategoryTargetingOptionDetails                 `json:"categoryDetails"`
	ContentDurationDetails          *ContentDurationTargetingOptionDetails          `json:"contentDurationDetails"`
	ContentGenreDetails             *ContentGenreTargetingOptionDetails             `json:"contentGenreDetails"`
	ContentInstreamPositionDetails  *ContentInstreamPositionTargetingOptionDetails  `json:"contentInstreamPositionDetails"`
	ContentOutstreamPositionDetails *ContentOutstreamPositionTargetingOptionDetails `json:"contentOutstreamPositionDetails"`
	ContentStreamTypeDetails        *ContentStreamTypeTargetingOptionDetails        `json:"contentStreamTypeDetails"`
	DeviceMakeModelDetails          *DeviceMakeModelTargetingOptionDetails          `json:"deviceMakeModelDetails"`
	DeviceTypeDetails               *DeviceTypeTargetingOptionDetails               `json:"deviceTypeDetails"`
	DigitalContentLabelDetails      *DigitalContentLabelTargetingOptionDetails      `json:"digitalContentLabelDetails"`
	EnvironmentDetails              *EnvironmentTargetingOptionDetails              `json:"environmentDetails"`
	ExchangeDetails                 *ExchangeTargetingOptionDetails                 `json:"exchangeDetails"`
	GenderDetails                   *GenderTargetingOptionDetails                   `json:"genderDetails"`
	GeoRegionDetails                *GeoRegionTargetingOptionDetails                `json:"geoRegionDetails"`
	HouseholdIncomeDetails          *HouseholdIncomeTargetingOptionDetails          `json:"householdIncomeDetails"`
	LanguageDetails                 *LanguageTargetingOptionDetails                 `json:"languageDetails"`
	Name                            *string                                         `json:"name"`
	NativeContentPositionDetails    *NativeContentPositionTargetingOptionDetails    `json:"nativeContentPositionDetails"`
	OmidDetails                     *OmidTargetingOptionDetails                     `json:"omidDetails"`
	OnScreenPositionDetails         *OnScreenPositionTargetingOptionDetails         `json:"onScreenPositionDetails"`
	OperatingSystemDetails          *OperatingSystemTargetingOptionDetails          `json:"operatingSystemDetails"`
	ParentalStatusDetails           *ParentalStatusTargetingOptionDetails           `json:"parentalStatusDetails"`
	PoiDetails                      *PoiTargetingOptionDetails                      `json:"poiDetails"`
	SensitiveCategoryDetails        *SensitiveCategoryTargetingOptionDetails        `json:"sensitiveCategoryDetails"`
	SubExchangeDetails              *SubExchangeTargetingOptionDetails              `json:"subExchangeDetails"`
	TargetingOptionID               *string                                         `json:"targetingOptionId"`
	TargetingType                   *TargetingOptionTargetingTypeEnum               `json:"targetingType"`
	UserRewardedContentDetails      *UserRewardedContentTargetingOptionDetails      `json:"userRewardedContentDetails"`
	VideoPlayerSizeDetails          *VideoPlayerSizeTargetingOptionDetails          `json:"videoPlayerSizeDetails"`
	ViewabilityDetails              *ViewabilityTargetingOptionDetails              `json:"viewabilityDetails"`
}
