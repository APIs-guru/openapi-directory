package shared

// GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
// Starts multi-factor sign-in by sending the multi-factor auth challenge.
type GoogleCloudIdentitytoolkitV2StartMfaSignInRequest struct {
	MfaEnrollmentID      *string                                               `json:"mfaEnrollmentId,omitempty"`
	MfaPendingCredential *string                                               `json:"mfaPendingCredential,omitempty"`
	PhoneSignInInfo      *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneSignInInfo,omitempty"`
	TenantID             *string                                               `json:"tenantId,omitempty"`
}
