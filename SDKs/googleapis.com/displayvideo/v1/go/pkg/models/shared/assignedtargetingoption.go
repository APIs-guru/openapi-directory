package shared

type AssignedTargetingOptionInheritanceEnum string

const (
	AssignedTargetingOptionInheritanceEnumInheritanceUnspecified  AssignedTargetingOptionInheritanceEnum = "INHERITANCE_UNSPECIFIED"
	AssignedTargetingOptionInheritanceEnumNotInherited            AssignedTargetingOptionInheritanceEnum = "NOT_INHERITED"
	AssignedTargetingOptionInheritanceEnumInheritedFromPartner    AssignedTargetingOptionInheritanceEnum = "INHERITED_FROM_PARTNER"
	AssignedTargetingOptionInheritanceEnumInheritedFromAdvertiser AssignedTargetingOptionInheritanceEnum = "INHERITED_FROM_ADVERTISER"
)

type AssignedTargetingOptionTargetingTypeEnum string

const (
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeUnspecified                  AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_UNSPECIFIED"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeChannel                      AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CHANNEL"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeAppCategory                  AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_APP_CATEGORY"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeApp                          AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_APP"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeURL                          AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_URL"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeDayAndTime                   AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DAY_AND_TIME"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeAgeRange                     AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AGE_RANGE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeRegionalLocationList         AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_REGIONAL_LOCATION_LIST"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeProximityLocationList        AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_PROXIMITY_LOCATION_LIST"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeGender                       AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_GENDER"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeVideoPlayerSize              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_VIDEO_PLAYER_SIZE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeUserRewardedContent          AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_USER_REWARDED_CONTENT"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeParentalStatus               AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_PARENTAL_STATUS"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeContentInstreamPosition      AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_INSTREAM_POSITION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeContentOutstreamPosition     AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeDeviceType                   AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DEVICE_TYPE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeAudienceGroup                AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUDIENCE_GROUP"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeBrowser                      AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_BROWSER"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeHouseholdIncome              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_HOUSEHOLD_INCOME"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeOnScreenPosition             AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_ON_SCREEN_POSITION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeThirdPartyVerifier           AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_THIRD_PARTY_VERIFIER"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion   AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeEnvironment                  AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_ENVIRONMENT"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeCarrierAndIsp                AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CARRIER_AND_ISP"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeOperatingSystem              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_OPERATING_SYSTEM"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeDeviceMakeModel              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_DEVICE_MAKE_MODEL"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeKeyword                      AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_KEYWORD"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeNegativeKeywordList          AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_NEGATIVE_KEYWORD_LIST"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeViewability                  AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_VIEWABILITY"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeCategory                     AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CATEGORY"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeInventorySource              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeLanguage                     AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_LANGUAGE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeAuthorizedSellerStatus       AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUTHORIZED_SELLER_STATUS"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeGeoRegion                    AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_GEO_REGION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeInventorySourceGroup         AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_INVENTORY_SOURCE_GROUP"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeExchange                     AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_EXCHANGE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeSubExchange                  AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_SUB_EXCHANGE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypePoi                          AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_POI"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeBusinessChain                AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_BUSINESS_CHAIN"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeContentDuration              AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_DURATION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeContentStreamType            AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_STREAM_TYPE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeNativeContentPosition        AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_NATIVE_CONTENT_POSITION"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeOmid                         AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_OMID"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeAudioContentType             AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_AUDIO_CONTENT_TYPE"
	AssignedTargetingOptionTargetingTypeEnumTargetingTypeContentGenre                 AssignedTargetingOptionTargetingTypeEnum = "TARGETING_TYPE_CONTENT_GENRE"
)

type AssignedTargetingOption struct {
	AgeRangeDetails                     *AgeRangeAssignedTargetingOptionDetails                 `json:"ageRangeDetails"`
	AppCategoryDetails                  *AppCategoryAssignedTargetingOptionDetails              `json:"appCategoryDetails"`
	AppDetails                          *AppAssignedTargetingOptionDetails                      `json:"appDetails"`
	AssignedTargetingOptionID           *string                                                 `json:"assignedTargetingOptionId"`
	AudienceGroupDetails                *AudienceGroupAssignedTargetingOptionDetails            `json:"audienceGroupDetails"`
	AudioContentTypeDetails             *AudioContentTypeAssignedTargetingOptionDetails         `json:"audioContentTypeDetails"`
	AuthorizedSellerStatusDetails       *AuthorizedSellerStatusAssignedTargetingOptionDetails   `json:"authorizedSellerStatusDetails"`
	BrowserDetails                      *BrowserAssignedTargetingOptionDetails                  `json:"browserDetails"`
	BusinessChainDetails                *BusinessChainAssignedTargetingOptionDetails            `json:"businessChainDetails"`
	CarrierAndIspDetails                *CarrierAndIspAssignedTargetingOptionDetails            `json:"carrierAndIspDetails"`
	CategoryDetails                     *CategoryAssignedTargetingOptionDetails                 `json:"categoryDetails"`
	ChannelDetails                      *ChannelAssignedTargetingOptionDetails                  `json:"channelDetails"`
	ContentDurationDetails              *ContentDurationAssignedTargetingOptionDetails          `json:"contentDurationDetails"`
	ContentGenreDetails                 *ContentGenreAssignedTargetingOptionDetails             `json:"contentGenreDetails"`
	ContentInstreamPositionDetails      *ContentInstreamPositionAssignedTargetingOptionDetails  `json:"contentInstreamPositionDetails"`
	ContentOutstreamPositionDetails     *ContentOutstreamPositionAssignedTargetingOptionDetails `json:"contentOutstreamPositionDetails"`
	ContentStreamTypeDetails            *ContentStreamTypeAssignedTargetingOptionDetails        `json:"contentStreamTypeDetails"`
	DayAndTimeDetails                   *DayAndTimeAssignedTargetingOptionDetails               `json:"dayAndTimeDetails"`
	DeviceMakeModelDetails              *DeviceMakeModelAssignedTargetingOptionDetails          `json:"deviceMakeModelDetails"`
	DeviceTypeDetails                   *DeviceTypeAssignedTargetingOptionDetails               `json:"deviceTypeDetails"`
	DigitalContentLabelExclusionDetails *DigitalContentLabelAssignedTargetingOptionDetails      `json:"digitalContentLabelExclusionDetails"`
	EnvironmentDetails                  *EnvironmentAssignedTargetingOptionDetails              `json:"environmentDetails"`
	ExchangeDetails                     *ExchangeAssignedTargetingOptionDetails                 `json:"exchangeDetails"`
	GenderDetails                       *GenderAssignedTargetingOptionDetails                   `json:"genderDetails"`
	GeoRegionDetails                    *GeoRegionAssignedTargetingOptionDetails                `json:"geoRegionDetails"`
	HouseholdIncomeDetails              *HouseholdIncomeAssignedTargetingOptionDetails          `json:"householdIncomeDetails"`
	Inheritance                         *AssignedTargetingOptionInheritanceEnum                 `json:"inheritance"`
	InventorySourceDetails              *InventorySourceAssignedTargetingOptionDetails          `json:"inventorySourceDetails"`
	InventorySourceGroupDetails         *InventorySourceGroupAssignedTargetingOptionDetails     `json:"inventorySourceGroupDetails"`
	KeywordDetails                      *KeywordAssignedTargetingOptionDetails                  `json:"keywordDetails"`
	LanguageDetails                     *LanguageAssignedTargetingOptionDetails                 `json:"languageDetails"`
	Name                                *string                                                 `json:"name"`
	NativeContentPositionDetails        *NativeContentPositionAssignedTargetingOptionDetails    `json:"nativeContentPositionDetails"`
	NegativeKeywordListDetails          *NegativeKeywordListAssignedTargetingOptionDetails      `json:"negativeKeywordListDetails"`
	OmidDetails                         *OmidAssignedTargetingOptionDetails                     `json:"omidDetails"`
	OnScreenPositionDetails             *OnScreenPositionAssignedTargetingOptionDetails         `json:"onScreenPositionDetails"`
	OperatingSystemDetails              *OperatingSystemAssignedTargetingOptionDetails          `json:"operatingSystemDetails"`
	ParentalStatusDetails               *ParentalStatusAssignedTargetingOptionDetails           `json:"parentalStatusDetails"`
	PoiDetails                          *PoiAssignedTargetingOptionDetails                      `json:"poiDetails"`
	ProximityLocationListDetails        *ProximityLocationListAssignedTargetingOptionDetails    `json:"proximityLocationListDetails"`
	RegionalLocationListDetails         *RegionalLocationListAssignedTargetingOptionDetails     `json:"regionalLocationListDetails"`
	SensitiveCategoryExclusionDetails   *SensitiveCategoryAssignedTargetingOptionDetails        `json:"sensitiveCategoryExclusionDetails"`
	SubExchangeDetails                  *SubExchangeAssignedTargetingOptionDetails              `json:"subExchangeDetails"`
	TargetingType                       *AssignedTargetingOptionTargetingTypeEnum               `json:"targetingType"`
	ThirdPartyVerifierDetails           *ThirdPartyVerifierAssignedTargetingOptionDetails       `json:"thirdPartyVerifierDetails"`
	URLDetails                          *URLAssignedTargetingOptionDetails                      `json:"urlDetails"`
	UserRewardedContentDetails          *UserRewardedContentAssignedTargetingOptionDetails      `json:"userRewardedContentDetails"`
	VideoPlayerSizeDetails              *VideoPlayerSizeAssignedTargetingOptionDetails          `json:"videoPlayerSizeDetails"`
	ViewabilityDetails                  *ViewabilityAssignedTargetingOptionDetails              `json:"viewabilityDetails"`
}
