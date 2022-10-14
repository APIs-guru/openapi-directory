package shared

type GoogleCloudIdentitytoolkitV2StartMfaSignInRequest struct {
	MfaEnrollmentID      *string                                               `json:"mfaEnrollmentId,omitempty"`
	MfaPendingCredential *string                                               `json:"mfaPendingCredential,omitempty"`
	PhoneSignInInfo      *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneSignInInfo,omitempty"`
	TenantID             *string                                               `json:"tenantId,omitempty"`
}
