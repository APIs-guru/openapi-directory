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
	AllowedUserTargetingModes        []PretargetingConfigAllowedUserTargetingModesEnum `json:"allowedUserTargetingModes,omitempty"`
	AppTargeting                     *AppTargeting                                     `json:"appTargeting,omitempty"`
	BillingID                        *string                                           `json:"billingId,omitempty"`
	DisplayName                      *string                                           `json:"displayName,omitempty"`
	ExcludedContentLabelIds          []string                                          `json:"excludedContentLabelIds,omitempty"`
	GeoTargeting                     *NumericTargetingDimension                        `json:"geoTargeting,omitempty"`
	IncludedCreativeDimensions       []CreativeDimensions                              `json:"includedCreativeDimensions,omitempty"`
	IncludedEnvironments             []PretargetingConfigIncludedEnvironmentsEnum      `json:"includedEnvironments,omitempty"`
	IncludedFormats                  []PretargetingConfigIncludedFormatsEnum           `json:"includedFormats,omitempty"`
	IncludedLanguages                []string                                          `json:"includedLanguages,omitempty"`
	IncludedMobileOperatingSystemIds []string                                          `json:"includedMobileOperatingSystemIds,omitempty"`
	IncludedPlatforms                []PretargetingConfigIncludedPlatformsEnum         `json:"includedPlatforms,omitempty"`
	IncludedUserIDTypes              []PretargetingConfigIncludedUserIDTypesEnum       `json:"includedUserIdTypes,omitempty"`
	InterstitialTargeting            *PretargetingConfigInterstitialTargetingEnum      `json:"interstitialTargeting,omitempty"`
	InvalidGeoIds                    []string                                          `json:"invalidGeoIds,omitempty"`
	MaximumQPS                       *string                                           `json:"maximumQps,omitempty"`
	MinimumViewabilityDecile         *int32                                            `json:"minimumViewabilityDecile,omitempty"`
	Name                             *string                                           `json:"name,omitempty"`
	PublisherTargeting               *StringTargetingDimension                         `json:"publisherTargeting,omitempty"`
	State                            *PretargetingConfigStateEnum                      `json:"state,omitempty"`
	UserListTargeting                *NumericTargetingDimension                        `json:"userListTargeting,omitempty"`
	VerticalTargeting                *NumericTargetingDimension                        `json:"verticalTargeting,omitempty"`
	WebTargeting                     *StringTargetingDimension                         `json:"webTargeting,omitempty"`
}
