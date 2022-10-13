package shared

type GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest struct {
	MfaPendingCredential  *string                                                  `json:"mfaPendingCredential"`
	PhoneVerificationInfo *GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo `json:"phoneVerificationInfo"`
	TenantID              *string                                                  `json:"tenantId"`
}
