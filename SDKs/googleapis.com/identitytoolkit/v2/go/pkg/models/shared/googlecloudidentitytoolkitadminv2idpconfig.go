package shared



type GoogleCloudIdentitytoolkitAdminV2IdpConfig struct {
    IdpCertificates []GoogleCloudIdentitytoolkitAdminV2IdpCertificate `json:"idpCertificates,omitempty"`
    IdpEntityID *string `json:"idpEntityId,omitempty"`
    SignRequest *bool `json:"signRequest,omitempty"`
    SsoURL *string `json:"ssoUrl,omitempty"`
    
}

