package shared

type OsPolicyModeEnum string

const (
	OsPolicyModeEnumModeUnspecified OsPolicyModeEnum = "MODE_UNSPECIFIED"
	OsPolicyModeEnumValidation      OsPolicyModeEnum = "VALIDATION"
	OsPolicyModeEnumEnforcement     OsPolicyModeEnum = "ENFORCEMENT"
)

// OsPolicy
// An OS policy defines the desired state configuration for a VM.
type OsPolicy struct {
	AllowNoResourceGroupMatch *bool                   `json:"allowNoResourceGroupMatch,omitempty"`
	Description               *string                 `json:"description,omitempty"`
	ID                        *string                 `json:"id,omitempty"`
	Mode                      *OsPolicyModeEnum       `json:"mode,omitempty"`
	ResourceGroups            []OsPolicyResourceGroup `json:"resourceGroups,omitempty"`
}
