package shared

type OsPolicyModeEnum string

const (
	OsPolicyModeEnumModeUnspecified OsPolicyModeEnum = "MODE_UNSPECIFIED"
	OsPolicyModeEnumValidation      OsPolicyModeEnum = "VALIDATION"
	OsPolicyModeEnumEnforcement     OsPolicyModeEnum = "ENFORCEMENT"
)

type OsPolicy struct {
	AllowNoResourceGroupMatch *bool                   `json:"allowNoResourceGroupMatch,omitempty"`
	Description               *string                 `json:"description,omitempty"`
	ID                        *string                 `json:"id,omitempty"`
	Mode                      *OsPolicyModeEnum       `json:"mode,omitempty"`
	ResourceGroups            []OsPolicyResourceGroup `json:"resourceGroups,omitempty"`
}
