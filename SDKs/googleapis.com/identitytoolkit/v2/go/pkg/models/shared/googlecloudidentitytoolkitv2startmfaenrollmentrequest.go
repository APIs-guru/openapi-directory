package shared

// GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
// Sends MFA enrollment verification SMS for a user.
type GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest struct {
	IDToken             *string                                               `json:"idToken,omitempty"`
	PhoneEnrollmentInfo *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneEnrollmentInfo,omitempty"`
	TenantID            *string                                               `json:"tenantId,omitempty"`
}
