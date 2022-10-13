package shared

type FloodlightConfigurationFirstDayOfWeekEnum string

const (
	FloodlightConfigurationFirstDayOfWeekEnumMonday FloodlightConfigurationFirstDayOfWeekEnum = "MONDAY"
	FloodlightConfigurationFirstDayOfWeekEnumSunday FloodlightConfigurationFirstDayOfWeekEnum = "SUNDAY"
)

type FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum string

const (
	FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumExcludeNaturalSearchConversionAttribution       FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
	FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchConversionAttribution       FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
	FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchTieredConversionAttribution FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
)

type FloodlightConfiguration struct {
	AccountID                                *string                                                              `json:"accountId"`
	AdvertiserID                             *string                                                              `json:"advertiserId"`
	AdvertiserIDDimensionValue               *DimensionValue                                                      `json:"advertiserIdDimensionValue"`
	AnalyticsDataSharingEnabled              *bool                                                                `json:"analyticsDataSharingEnabled"`
	CustomViewabilityMetric                  *CustomViewabilityMetric                                             `json:"customViewabilityMetric"`
	ExposureToConversionEnabled              *bool                                                                `json:"exposureToConversionEnabled"`
	FirstDayOfWeek                           *FloodlightConfigurationFirstDayOfWeekEnum                           `json:"firstDayOfWeek"`
	ID                                       *string                                                              `json:"id"`
	IDDimensionValue                         *DimensionValue                                                      `json:"idDimensionValue"`
	InAppAttributionTrackingEnabled          *bool                                                                `json:"inAppAttributionTrackingEnabled"`
	Kind                                     *string                                                              `json:"kind"`
	LookbackConfiguration                    *LookbackConfiguration                                               `json:"lookbackConfiguration"`
	NaturalSearchConversionAttributionOption *FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum `json:"naturalSearchConversionAttributionOption"`
	OmnitureSettings                         *OmnitureSettings                                                    `json:"omnitureSettings"`
	SubaccountID                             *string                                                              `json:"subaccountId"`
	TagSettings                              *TagSettings                                                         `json:"tagSettings"`
	ThirdPartyAuthenticationTokens           []ThirdPartyAuthenticationToken                                      `json:"thirdPartyAuthenticationTokens"`
	UserDefinedVariableConfigurations        []UserDefinedVariableConfiguration                                   `json:"userDefinedVariableConfigurations"`
}
