package shared

// UserPasswordValidationPolicy
// User level password validation policy.
type UserPasswordValidationPolicy struct {
	AllowedFailedAttempts      *int32          `json:"allowedFailedAttempts,omitempty"`
	EnableFailedAttemptsCheck  *bool           `json:"enableFailedAttemptsCheck,omitempty"`
	EnablePasswordVerification *bool           `json:"enablePasswordVerification,omitempty"`
	PasswordExpirationDuration *string         `json:"passwordExpirationDuration,omitempty"`
	Status                     *PasswordStatus `json:"status,omitempty"`
}
