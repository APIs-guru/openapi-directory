package shared

type OsPolicyModeEnum string

const (
	OsPolicyModeEnumModeUnspecified OsPolicyModeEnum = "MODE_UNSPECIFIED"
	OsPolicyModeEnumValidation      OsPolicyModeEnum = "VALIDATION"
	OsPolicyModeEnumEnforcement     OsPolicyModeEnum = "ENFORCEMENT"
)

type OsPolicy struct {
	AllowNoResourceGroupMatch *bool                   `json:"allowNoResourceGroupMatch"`
	Description               *string                 `json:"description"`
	ID                        *string                 `json:"id"`
	Mode                      *OsPolicyModeEnum       `json:"mode"`
	ResourceGroups            []OsPolicyResourceGroup `json:"resourceGroups"`
}
