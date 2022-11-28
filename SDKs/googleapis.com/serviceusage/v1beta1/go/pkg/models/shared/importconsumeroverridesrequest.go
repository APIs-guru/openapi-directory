package shared

type ImportConsumerOverridesRequestForceOnlyEnum string

const (
	ImportConsumerOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified    ImportConsumerOverridesRequestForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ImportConsumerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage        ImportConsumerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ImportConsumerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh ImportConsumerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

// ImportConsumerOverridesRequest
// Request message for ImportConsumerOverrides
type ImportConsumerOverridesRequest struct {
	Force        *bool                                         `json:"force,omitempty"`
	ForceOnly    []ImportConsumerOverridesRequestForceOnlyEnum `json:"forceOnly,omitempty"`
	InlineSource *OverrideInlineSource                         `json:"inlineSource,omitempty"`
}
