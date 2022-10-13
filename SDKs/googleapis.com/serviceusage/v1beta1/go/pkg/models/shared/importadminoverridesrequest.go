package shared

type ImportAdminOverridesRequestForceOnlyEnum string

const (
	ImportAdminOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified    ImportAdminOverridesRequestForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ImportAdminOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage        ImportAdminOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ImportAdminOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh ImportAdminOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ImportAdminOverridesRequest struct {
	Force        *bool                                      `json:"force"`
	ForceOnly    []ImportAdminOverridesRequestForceOnlyEnum `json:"forceOnly"`
	InlineSource *OverrideInlineSource                      `json:"inlineSource"`
}
