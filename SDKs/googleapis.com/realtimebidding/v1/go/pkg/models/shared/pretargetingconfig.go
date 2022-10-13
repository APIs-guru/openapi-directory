package shared

type PretargetingConfigAllowedUserTargetingModesEnum string

const (
	PretargetingConfigAllowedUserTargetingModesEnumUserTargetingModeUnspecified PretargetingConfigAllowedUserTargetingModesEnum = "USER_TARGETING_MODE_UNSPECIFIED"
	PretargetingConfigAllowedUserTargetingModesEnumRemarketingAds               PretargetingConfigAllowedUserTargetingModesEnum = "REMARKETING_ADS"
	PretargetingConfigAllowedUserTargetingModesEnumInterestBasedTargeting       PretargetingConfigAllowedUserTargetingModesEnum = "INTEREST_BASED_TARGETING"
)

type PretargetingConfigIncludedEnvironmentsEnum string

const (
	PretargetingConfigIncludedEnvironmentsEnumEnvironmentUnspecified PretargetingConfigIncludedEnvironmentsEnum = "ENVIRONMENT_UNSPECIFIED"
	PretargetingConfigIncludedEnvironmentsEnumApp                    PretargetingConfigIncludedEnvironmentsEnum = "APP"
	PretargetingConfigIncludedEnvironmentsEnumWeb                    PretargetingConfigIncludedEnvironmentsEnum = "WEB"
)

type PretargetingConfigIncludedFormatsEnum string

const (
	PretargetingConfigIncludedFormatsEnumCreativeFormatUnspecified PretargetingConfigIncludedFormatsEnum = "CREATIVE_FORMAT_UNSPECIFIED"
	PretargetingConfigIncludedFormatsEnumHTML                      PretargetingConfigIncludedFormatsEnum = "HTML"
	PretargetingConfigIncludedFormatsEnumVast                      PretargetingConfigIncludedFormatsEnum = "VAST"
	PretargetingConfigIncludedFormatsEnumNative                    PretargetingConfigIncludedFormatsEnum = "NATIVE"
)

type PretargetingConfigIncludedPlatformsEnum string

const (
	PretargetingConfigIncludedPlatformsEnumPlatformUnspecified PretargetingConfigIncludedPlatformsEnum = "PLATFORM_UNSPECIFIED"
	PretargetingConfigIncludedPlatformsEnumPersonalComputer    PretargetingConfigIncludedPlatformsEnum = "PERSONAL_COMPUTER"
	PretargetingConfigIncludedPlatformsEnumPhone               PretargetingConfigIncludedPlatformsEnum = "PHONE"
	PretargetingConfigIncludedPlatformsEnumTablet              PretargetingConfigIncludedPlatformsEnum = "TABLET"
	PretargetingConfigIncludedPlatformsEnumConnectedTv         PretargetingConfigIncludedPlatformsEnum = "CONNECTED_TV"
)

type PretargetingConfigIncludedUserIDTypesEnum string

const (
	PretargetingConfigIncludedUserIDTypesEnumUserIDTypeUnspecified PretargetingConfigIncludedUserIDTypesEnum = "USER_ID_TYPE_UNSPECIFIED"
	PretargetingConfigIncludedUserIDTypesEnumHostedMatchData       PretargetingConfigIncludedUserIDTypesEnum = "HOSTED_MATCH_DATA"
	PretargetingConfigIncludedUserIDTypesEnumGoogleCookie          PretargetingConfigIncludedUserIDTypesEnum = "GOOGLE_COOKIE"
	PretargetingConfigIncludedUserIDTypesEnumDeviceID              PretargetingConfigIncludedUserIDTypesEnum = "DEVICE_ID"
)

type PretargetingConfigInterstitialTargetingEnum string

const (
	PretargetingConfigInterstitialTargetingEnumInterstitialTargetingUnspecified PretargetingConfigInterstitialTargetingEnum = "INTERSTITIAL_TARGETING_UNSPECIFIED"
	PretargetingConfigInterstitialTargetingEnumOnlyInterstitialRequests         PretargetingConfigInterstitialTargetingEnum = "ONLY_INTERSTITIAL_REQUESTS"
	PretargetingConfigInterstitialTargetingEnumOnlyNonInterstitialRequests      PretargetingConfigInterstitialTargetingEnum = "ONLY_NON_INTERSTITIAL_REQUESTS"
)

type PretargetingConfigStateEnum string

const (
	PretargetingConfigStateEnumStateUnspecified PretargetingConfigStateEnum = "STATE_UNSPECIFIED"
	PretargetingConfigStateEnumActive           PretargetingConfigStateEnum = "ACTIVE"
	PretargetingConfigStateEnumSuspended        PretargetingConfigStateEnum = "SUSPENDED"
)

type PretargetingConfig struct {
	AllowedUserTargetingModes        []PretargetingConfigAllowedUserTargetingModesEnum `json:"allowedUserTargetingModes"`
	AppTargeting                     *AppTargeting                                     `json:"appTargeting"`
	BillingID                        *string                                           `json:"billingId"`
	DisplayName                      *string                                           `json:"displayName"`
	ExcludedContentLabelIds          []string                                          `json:"excludedContentLabelIds"`
	GeoTargeting                     *NumericTargetingDimension                        `json:"geoTargeting"`
	IncludedCreativeDimensions       []CreativeDimensions                              `json:"includedCreativeDimensions"`
	IncludedEnvironments             []PretargetingConfigIncludedEnvironmentsEnum      `json:"includedEnvironments"`
	IncludedFormats                  []PretargetingConfigIncludedFormatsEnum           `json:"includedFormats"`
	IncludedLanguages                []string                                          `json:"includedLanguages"`
	IncludedMobileOperatingSystemIds []string                                          `json:"includedMobileOperatingSystemIds"`
	IncludedPlatforms                []PretargetingConfigIncludedPlatformsEnum         `json:"includedPlatforms"`
	IncludedUserIDTypes              []PretargetingConfigIncludedUserIDTypesEnum       `json:"includedUserIdTypes"`
	InterstitialTargeting            *PretargetingConfigInterstitialTargetingEnum      `json:"interstitialTargeting"`
	InvalidGeoIds                    []string                                          `json:"invalidGeoIds"`
	MaximumQPS                       *string                                           `json:"maximumQps"`
	MinimumViewabilityDecile         *int32                                            `json:"minimumViewabilityDecile"`
	Name                             *string                                           `json:"name"`
	PublisherTargeting               *StringTargetingDimension                         `json:"publisherTargeting"`
	State                            *PretargetingConfigStateEnum                      `json:"state"`
	UserListTargeting                *NumericTargetingDimension                        `json:"userListTargeting"`
	VerticalTargeting                *NumericTargetingDimension                        `json:"verticalTargeting"`
	WebTargeting                     *StringTargetingDimension                         `json:"webTargeting"`
}
