package shared

type PasswordValidationPolicyComplexityEnum string

const (
	PasswordValidationPolicyComplexityEnumComplexityUnspecified PasswordValidationPolicyComplexityEnum = "COMPLEXITY_UNSPECIFIED"
	PasswordValidationPolicyComplexityEnumComplexityDefault     PasswordValidationPolicyComplexityEnum = "COMPLEXITY_DEFAULT"
)

type PasswordValidationPolicy struct {
	Complexity                *PasswordValidationPolicyComplexityEnum `json:"complexity"`
	DisallowUsernameSubstring *bool                                   `json:"disallowUsernameSubstring"`
	EnablePasswordPolicy      *bool                                   `json:"enablePasswordPolicy"`
	MinLength                 *int32                                  `json:"minLength"`
	PasswordChangeInterval    *string                                 `json:"passwordChangeInterval"`
	ReuseInterval             *int32                                  `json:"reuseInterval"`
}
