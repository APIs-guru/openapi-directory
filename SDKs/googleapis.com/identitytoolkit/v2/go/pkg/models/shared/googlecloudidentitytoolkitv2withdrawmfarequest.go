package shared

type GoogleCloudIdentitytoolkitV2WithdrawMfaRequest struct {
	IDToken         *string `json:"idToken"`
	MfaEnrollmentID *string `json:"mfaEnrollmentId"`
	TenantID        *string `json:"tenantId"`
}
