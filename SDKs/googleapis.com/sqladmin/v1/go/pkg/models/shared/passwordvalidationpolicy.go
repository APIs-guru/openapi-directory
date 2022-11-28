package shared

type PasswordValidationPolicyComplexityEnum string

const (
	PasswordValidationPolicyComplexityEnumComplexityUnspecified PasswordValidationPolicyComplexityEnum = "COMPLEXITY_UNSPECIFIED"
	PasswordValidationPolicyComplexityEnumComplexityDefault     PasswordValidationPolicyComplexityEnum = "COMPLEXITY_DEFAULT"
)

// PasswordValidationPolicy
// Database instance local user password validation policy
type PasswordValidationPolicy struct {
	Complexity                *PasswordValidationPolicyComplexityEnum `json:"complexity,omitempty"`
	DisallowUsernameSubstring *bool                                   `json:"disallowUsernameSubstring,omitempty"`
	EnablePasswordPolicy      *bool                                   `json:"enablePasswordPolicy,omitempty"`
	MinLength                 *int32                                  `json:"minLength,omitempty"`
	PasswordChangeInterval    *string                                 `json:"passwordChangeInterval,omitempty"`
	ReuseInterval             *int32                                  `json:"reuseInterval,omitempty"`
}
