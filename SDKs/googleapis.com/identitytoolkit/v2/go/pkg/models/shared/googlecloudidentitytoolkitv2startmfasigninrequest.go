package shared

type GoogleCloudIdentitytoolkitV2StartMfaSignInRequest struct {
	MfaEnrollmentID      *string                                               `json:"mfaEnrollmentId"`
	MfaPendingCredential *string                                               `json:"mfaPendingCredential"`
	PhoneSignInInfo      *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneSignInInfo"`
	TenantID             *string                                               `json:"tenantId"`
}
