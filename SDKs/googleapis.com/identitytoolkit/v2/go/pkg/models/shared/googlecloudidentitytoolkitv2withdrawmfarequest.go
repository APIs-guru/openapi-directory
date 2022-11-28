package shared

// GoogleCloudIdentitytoolkitV2WithdrawMfaRequest
// Withdraws MFA.
type GoogleCloudIdentitytoolkitV2WithdrawMfaRequest struct {
	IDToken         *string `json:"idToken,omitempty"`
	MfaEnrollmentID *string `json:"mfaEnrollmentId,omitempty"`
	TenantID        *string `json:"tenantId,omitempty"`
}
