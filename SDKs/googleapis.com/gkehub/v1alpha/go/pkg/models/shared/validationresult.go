package shared

type ValidationResultValidatorEnum string

const (
	ValidationResultValidatorEnumValidatorTypeUnspecified ValidationResultValidatorEnum = "VALIDATOR_TYPE_UNSPECIFIED"
	ValidationResultValidatorEnumMembershipID             ValidationResultValidatorEnum = "MEMBERSHIP_ID"
	ValidationResultValidatorEnumCrossProjectPermission   ValidationResultValidatorEnum = "CROSS_PROJECT_PERMISSION"
)

// ValidationResult
// ValidationResults are results set by each validator running during ValidateCreateMembership.
type ValidationResult struct {
	Result    *string                        `json:"result,omitempty"`
	Success   *bool                          `json:"success,omitempty"`
	Validator *ValidationResultValidatorEnum `json:"validator,omitempty"`
}
