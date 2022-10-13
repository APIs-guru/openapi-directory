package shared

type ImportConsumerOverridesRequestForceOnlyEnum string

const (
	ImportConsumerOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified    ImportConsumerOverridesRequestForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ImportConsumerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage        ImportConsumerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ImportConsumerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh ImportConsumerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ImportConsumerOverridesRequest struct {
	Force        *bool                                         `json:"force"`
	ForceOnly    []ImportConsumerOverridesRequestForceOnlyEnum `json:"forceOnly"`
	InlineSource *OverrideInlineSource                         `json:"inlineSource"`
}
