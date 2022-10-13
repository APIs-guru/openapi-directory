package shared

type UserPasswordValidationPolicy struct {
	AllowedFailedAttempts      *int32          `json:"allowedFailedAttempts"`
	EnableFailedAttemptsCheck  *bool           `json:"enableFailedAttemptsCheck"`
	EnablePasswordVerification *bool           `json:"enablePasswordVerification"`
	PasswordExpirationDuration *string         `json:"passwordExpirationDuration"`
	Status                     *PasswordStatus `json:"status"`
}
