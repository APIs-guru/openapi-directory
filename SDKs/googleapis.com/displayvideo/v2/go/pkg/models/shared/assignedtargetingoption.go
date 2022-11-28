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

// AssignedTargetingOption
// A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
type AssignedTargetingOption struct {
	AgeRangeDetails                     *AgeRangeAssignedTargetingOptionDetails                 `json:"ageRangeDetails,omitempty"`
	AppCategoryDetails                  *AppCategoryAssignedTargetingOptionDetails              `json:"appCategoryDetails,omitempty"`
	AppDetails                          *AppAssignedTargetingOptionDetails                      `json:"appDetails,omitempty"`
	AssignedTargetingOptionID           *string                                                 `json:"assignedTargetingOptionId,omitempty"`
	AudienceGroupDetails                *AudienceGroupAssignedTargetingOptionDetails            `json:"audienceGroupDetails,omitempty"`
	AudioContentTypeDetails             *AudioContentTypeAssignedTargetingOptionDetails         `json:"audioContentTypeDetails,omitempty"`
	AuthorizedSellerStatusDetails       *AuthorizedSellerStatusAssignedTargetingOptionDetails   `json:"authorizedSellerStatusDetails,omitempty"`
	BrowserDetails                      *BrowserAssignedTargetingOptionDetails                  `json:"browserDetails,omitempty"`
	BusinessChainDetails                *BusinessChainAssignedTargetingOptionDetails            `json:"businessChainDetails,omitempty"`
	CarrierAndIspDetails                *CarrierAndIspAssignedTargetingOptionDetails            `json:"carrierAndIspDetails,omitempty"`
	CategoryDetails                     *CategoryAssignedTargetingOptionDetails                 `json:"categoryDetails,omitempty"`
	ChannelDetails                      *ChannelAssignedTargetingOptionDetails                  `json:"channelDetails,omitempty"`
	ContentDurationDetails              *ContentDurationAssignedTargetingOptionDetails          `json:"contentDurationDetails,omitempty"`
	ContentGenreDetails                 *ContentGenreAssignedTargetingOptionDetails             `json:"contentGenreDetails,omitempty"`
	ContentInstreamPositionDetails      *ContentInstreamPositionAssignedTargetingOptionDetails  `json:"contentInstreamPositionDetails,omitempty"`
	ContentOutstreamPositionDetails     *ContentOutstreamPositionAssignedTargetingOptionDetails `json:"contentOutstreamPositionDetails,omitempty"`
	ContentStreamTypeDetails            *ContentStreamTypeAssignedTargetingOptionDetails        `json:"contentStreamTypeDetails,omitempty"`
	DayAndTimeDetails                   *DayAndTimeAssignedTargetingOptionDetails               `json:"dayAndTimeDetails,omitempty"`
	DeviceMakeModelDetails              *DeviceMakeModelAssignedTargetingOptionDetails          `json:"deviceMakeModelDetails,omitempty"`
	DeviceTypeDetails                   *DeviceTypeAssignedTargetingOptionDetails               `json:"deviceTypeDetails,omitempty"`
	DigitalContentLabelExclusionDetails *DigitalContentLabelAssignedTargetingOptionDetails      `json:"digitalContentLabelExclusionDetails,omitempty"`
	EnvironmentDetails                  *EnvironmentAssignedTargetingOptionDetails              `json:"environmentDetails,omitempty"`
	ExchangeDetails                     *ExchangeAssignedTargetingOptionDetails                 `json:"exchangeDetails,omitempty"`
	GenderDetails                       *GenderAssignedTargetingOptionDetails                   `json:"genderDetails,omitempty"`
	GeoRegionDetails                    *GeoRegionAssignedTargetingOptionDetails                `json:"geoRegionDetails,omitempty"`
	HouseholdIncomeDetails              *HouseholdIncomeAssignedTargetingOptionDetails          `json:"householdIncomeDetails,omitempty"`
	Inheritance                         *AssignedTargetingOptionInheritanceEnum                 `json:"inheritance,omitempty"`
	InventorySourceDetails              *InventorySourceAssignedTargetingOptionDetails          `json:"inventorySourceDetails,omitempty"`
	InventorySourceGroupDetails         *InventorySourceGroupAssignedTargetingOptionDetails     `json:"inventorySourceGroupDetails,omitempty"`
	KeywordDetails                      *KeywordAssignedTargetingOptionDetails                  `json:"keywordDetails,omitempty"`
	LanguageDetails                     *LanguageAssignedTargetingOptionDetails                 `json:"languageDetails,omitempty"`
	Name                                *string                                                 `json:"name,omitempty"`
	NativeContentPositionDetails        *NativeContentPositionAssignedTargetingOptionDetails    `json:"nativeContentPositionDetails,omitempty"`
	NegativeKeywordListDetails          *NegativeKeywordListAssignedTargetingOptionDetails      `json:"negativeKeywordListDetails,omitempty"`
	OmidDetails                         *OmidAssignedTargetingOptionDetails                     `json:"omidDetails,omitempty"`
	OnScreenPositionDetails             *OnScreenPositionAssignedTargetingOptionDetails         `json:"onScreenPositionDetails,omitempty"`
	OperatingSystemDetails              *OperatingSystemAssignedTargetingOptionDetails          `json:"operatingSystemDetails,omitempty"`
	ParentalStatusDetails               *ParentalStatusAssignedTargetingOptionDetails           `json:"parentalStatusDetails,omitempty"`
	PoiDetails                          *PoiAssignedTargetingOptionDetails                      `json:"poiDetails,omitempty"`
	ProximityLocationListDetails        *ProximityLocationListAssignedTargetingOptionDetails    `json:"proximityLocationListDetails,omitempty"`
	RegionalLocationListDetails         *RegionalLocationListAssignedTargetingOptionDetails     `json:"regionalLocationListDetails,omitempty"`
	SensitiveCategoryExclusionDetails   *SensitiveCategoryAssignedTargetingOptionDetails        `json:"sensitiveCategoryExclusionDetails,omitempty"`
	SubExchangeDetails                  *SubExchangeAssignedTargetingOptionDetails              `json:"subExchangeDetails,omitempty"`
	TargetingType                       *AssignedTargetingOptionTargetingTypeEnum               `json:"targetingType,omitempty"`
	ThirdPartyVerifierDetails           *ThirdPartyVerifierAssignedTargetingOptionDetails       `json:"thirdPartyVerifierDetails,omitempty"`
	URLDetails                          *URLAssignedTargetingOptionDetails                      `json:"urlDetails,omitempty"`
	UserRewardedContentDetails          *UserRewardedContentAssignedTargetingOptionDetails      `json:"userRewardedContentDetails,omitempty"`
	VideoPlayerSizeDetails              *VideoPlayerSizeAssignedTargetingOptionDetails          `json:"videoPlayerSizeDetails,omitempty"`
	ViewabilityDetails                  *ViewabilityAssignedTargetingOptionDetails              `json:"viewabilityDetails,omitempty"`
}

// AssignedTargetingOptionInput
// A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
type AssignedTargetingOptionInput struct {
	AgeRangeDetails                     *AgeRangeAssignedTargetingOptionDetails                      `json:"ageRangeDetails,omitempty"`
	AppCategoryDetails                  *AppCategoryAssignedTargetingOptionDetailsInput              `json:"appCategoryDetails,omitempty"`
	AppDetails                          *AppAssignedTargetingOptionDetailsInput                      `json:"appDetails,omitempty"`
	AudienceGroupDetails                *AudienceGroupAssignedTargetingOptionDetails                 `json:"audienceGroupDetails,omitempty"`
	AudioContentTypeDetails             *AudioContentTypeAssignedTargetingOptionDetails              `json:"audioContentTypeDetails,omitempty"`
	AuthorizedSellerStatusDetails       *AuthorizedSellerStatusAssignedTargetingOptionDetailsInput   `json:"authorizedSellerStatusDetails,omitempty"`
	BrowserDetails                      *BrowserAssignedTargetingOptionDetailsInput                  `json:"browserDetails,omitempty"`
	BusinessChainDetails                *BusinessChainAssignedTargetingOptionDetailsInput            `json:"businessChainDetails,omitempty"`
	CarrierAndIspDetails                *CarrierAndIspAssignedTargetingOptionDetailsInput            `json:"carrierAndIspDetails,omitempty"`
	CategoryDetails                     *CategoryAssignedTargetingOptionDetailsInput                 `json:"categoryDetails,omitempty"`
	ChannelDetails                      *ChannelAssignedTargetingOptionDetails                       `json:"channelDetails,omitempty"`
	ContentDurationDetails              *ContentDurationAssignedTargetingOptionDetailsInput          `json:"contentDurationDetails,omitempty"`
	ContentGenreDetails                 *ContentGenreAssignedTargetingOptionDetailsInput             `json:"contentGenreDetails,omitempty"`
	ContentInstreamPositionDetails      *ContentInstreamPositionAssignedTargetingOptionDetailsInput  `json:"contentInstreamPositionDetails,omitempty"`
	ContentOutstreamPositionDetails     *ContentOutstreamPositionAssignedTargetingOptionDetailsInput `json:"contentOutstreamPositionDetails,omitempty"`
	ContentStreamTypeDetails            *ContentStreamTypeAssignedTargetingOptionDetailsInput        `json:"contentStreamTypeDetails,omitempty"`
	DayAndTimeDetails                   *DayAndTimeAssignedTargetingOptionDetails                    `json:"dayAndTimeDetails,omitempty"`
	DeviceMakeModelDetails              *DeviceMakeModelAssignedTargetingOptionDetailsInput          `json:"deviceMakeModelDetails,omitempty"`
	DeviceTypeDetails                   *DeviceTypeAssignedTargetingOptionDetailsInput               `json:"deviceTypeDetails,omitempty"`
	DigitalContentLabelExclusionDetails *DigitalContentLabelAssignedTargetingOptionDetails           `json:"digitalContentLabelExclusionDetails,omitempty"`
	EnvironmentDetails                  *EnvironmentAssignedTargetingOptionDetails                   `json:"environmentDetails,omitempty"`
	ExchangeDetails                     *ExchangeAssignedTargetingOptionDetails                      `json:"exchangeDetails,omitempty"`
	GenderDetails                       *GenderAssignedTargetingOptionDetails                        `json:"genderDetails,omitempty"`
	GeoRegionDetails                    *GeoRegionAssignedTargetingOptionDetailsInput                `json:"geoRegionDetails,omitempty"`
	HouseholdIncomeDetails              *HouseholdIncomeAssignedTargetingOptionDetails               `json:"householdIncomeDetails,omitempty"`
	InventorySourceDetails              *InventorySourceAssignedTargetingOptionDetails               `json:"inventorySourceDetails,omitempty"`
	InventorySourceGroupDetails         *InventorySourceGroupAssignedTargetingOptionDetails          `json:"inventorySourceGroupDetails,omitempty"`
	KeywordDetails                      *KeywordAssignedTargetingOptionDetails                       `json:"keywordDetails,omitempty"`
	LanguageDetails                     *LanguageAssignedTargetingOptionDetailsInput                 `json:"languageDetails,omitempty"`
	NativeContentPositionDetails        *NativeContentPositionAssignedTargetingOptionDetails         `json:"nativeContentPositionDetails,omitempty"`
	NegativeKeywordListDetails          *NegativeKeywordListAssignedTargetingOptionDetails           `json:"negativeKeywordListDetails,omitempty"`
	OmidDetails                         *OmidAssignedTargetingOptionDetails                          `json:"omidDetails,omitempty"`
	OnScreenPositionDetails             *OnScreenPositionAssignedTargetingOptionDetailsInput         `json:"onScreenPositionDetails,omitempty"`
	OperatingSystemDetails              *OperatingSystemAssignedTargetingOptionDetailsInput          `json:"operatingSystemDetails,omitempty"`
	ParentalStatusDetails               *ParentalStatusAssignedTargetingOptionDetails                `json:"parentalStatusDetails,omitempty"`
	PoiDetails                          *PoiAssignedTargetingOptionDetailsInput                      `json:"poiDetails,omitempty"`
	ProximityLocationListDetails        *ProximityLocationListAssignedTargetingOptionDetails         `json:"proximityLocationListDetails,omitempty"`
	RegionalLocationListDetails         *RegionalLocationListAssignedTargetingOptionDetails          `json:"regionalLocationListDetails,omitempty"`
	SensitiveCategoryExclusionDetails   *SensitiveCategoryAssignedTargetingOptionDetails             `json:"sensitiveCategoryExclusionDetails,omitempty"`
	SubExchangeDetails                  *SubExchangeAssignedTargetingOptionDetails                   `json:"subExchangeDetails,omitempty"`
	ThirdPartyVerifierDetails           *ThirdPartyVerifierAssignedTargetingOptionDetails            `json:"thirdPartyVerifierDetails,omitempty"`
	URLDetails                          *URLAssignedTargetingOptionDetails                           `json:"urlDetails,omitempty"`
	UserRewardedContentDetails          *UserRewardedContentAssignedTargetingOptionDetailsInput      `json:"userRewardedContentDetails,omitempty"`
	VideoPlayerSizeDetails              *VideoPlayerSizeAssignedTargetingOptionDetails               `json:"videoPlayerSizeDetails,omitempty"`
	ViewabilityDetails                  *ViewabilityAssignedTargetingOptionDetails                   `json:"viewabilityDetails,omitempty"`
}
