package shared

// GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
// Finishes enrolling a second factor for the user.
type GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest struct {
	DisplayName           *string                                                  `json:"displayName,omitempty"`
	IDToken               *string                                                  `json:"idToken,omitempty"`
	PhoneVerificationInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo `json:"phoneVerificationInfo,omitempty"`
	TenantID              *string                                                  `json:"tenantId,omitempty"`
}
