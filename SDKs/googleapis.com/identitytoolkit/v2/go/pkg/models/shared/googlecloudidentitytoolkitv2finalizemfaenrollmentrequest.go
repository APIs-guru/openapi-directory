package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest struct {
	DisplayName           *string                                                  `json:"displayName"`
	IDToken               *string                                                  `json:"idToken"`
	PhoneVerificationInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo `json:"phoneVerificationInfo"`
	TenantID              *string                                                  `json:"tenantId"`
}
