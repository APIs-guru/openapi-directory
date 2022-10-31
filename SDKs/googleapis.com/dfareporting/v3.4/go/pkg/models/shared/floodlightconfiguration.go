package shared




type FloodlightConfigurationFirstDayOfWeekEnum string

const (
    FloodlightConfigurationFirstDayOfWeekEnumMonday FloodlightConfigurationFirstDayOfWeekEnum = "MONDAY"
FloodlightConfigurationFirstDayOfWeekEnumSunday FloodlightConfigurationFirstDayOfWeekEnum = "SUNDAY"
)



type FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum string

const (
    FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumExcludeNaturalSearchConversionAttribution FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchConversionAttribution FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
FloodlightConfigurationNaturalSearchConversionAttributionOptionEnumIncludeNaturalSearchTieredConversionAttribution FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"
)


type FloodlightConfiguration struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    AnalyticsDataSharingEnabled *bool `json:"analyticsDataSharingEnabled,omitempty"`
    CustomViewabilityMetric *CustomViewabilityMetric `json:"customViewabilityMetric,omitempty"`
    ExposureToConversionEnabled *bool `json:"exposureToConversionEnabled,omitempty"`
    FirstDayOfWeek *FloodlightConfigurationFirstDayOfWeekEnum `json:"firstDayOfWeek,omitempty"`
    ID *string `json:"id,omitempty"`
    IDDimensionValue *DimensionValue `json:"idDimensionValue,omitempty"`
    InAppAttributionTrackingEnabled *bool `json:"inAppAttributionTrackingEnabled,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LookbackConfiguration *LookbackConfiguration `json:"lookbackConfiguration,omitempty"`
    NaturalSearchConversionAttributionOption *FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum `json:"naturalSearchConversionAttributionOption,omitempty"`
    OmnitureSettings *OmnitureSettings `json:"omnitureSettings,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TagSettings *TagSettings `json:"tagSettings,omitempty"`
    ThirdPartyAuthenticationTokens []ThirdPartyAuthenticationToken `json:"thirdPartyAuthenticationTokens,omitempty"`
    UserDefinedVariableConfigurations []UserDefinedVariableConfiguration `json:"userDefinedVariableConfigurations,omitempty"`
    
}

