package shared



type GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest struct {
    IDToken *string `json:"idToken,omitempty"`
    PhoneEnrollmentInfo *GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo `json:"phoneEnrollmentInfo,omitempty"`
    TenantID *string `json:"tenantId,omitempty"`
    
}

