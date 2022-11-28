package shared

// GoogleCloudIdentitytoolkitAdminV2IdpConfig
// The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
type GoogleCloudIdentitytoolkitAdminV2IdpConfig struct {
	IdpCertificates []GoogleCloudIdentitytoolkitAdminV2IdpCertificate `json:"idpCertificates,omitempty"`
	IdpEntityID     *string                                           `json:"idpEntityId,omitempty"`
	SignRequest     *bool                                             `json:"signRequest,omitempty"`
	SsoURL          *string                                           `json:"ssoUrl,omitempty"`
}
