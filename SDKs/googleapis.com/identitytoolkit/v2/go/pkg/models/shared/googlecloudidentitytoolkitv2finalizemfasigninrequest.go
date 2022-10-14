package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest struct {
	MfaPendingCredential  *string                                                  `json:"mfaPendingCredential,omitempty"`
	PhoneVerificationInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo `json:"phoneVerificationInfo,omitempty"`
	TenantID              *string                                                  `json:"tenantId,omitempty"`
}
