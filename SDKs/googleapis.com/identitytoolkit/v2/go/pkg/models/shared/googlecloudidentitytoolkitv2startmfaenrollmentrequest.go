package shared

type GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest struct {
	IDToken             *string                                               `json:"idToken"`
	PhoneEnrollmentInfo *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneEnrollmentInfo"`
	TenantID            *string                                               `json:"tenantId"`
}
