package shared

// GoogleCloudIdentitytoolkitAdminV2SpConfig
// The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
type GoogleCloudIdentitytoolkitAdminV2SpConfig struct {
	CallbackURI    *string                                          `json:"callbackUri,omitempty"`
	SpCertificates []GoogleCloudIdentitytoolkitAdminV2SpCertificate `json:"spCertificates,omitempty"`
	SpEntityID     *string                                          `json:"spEntityId,omitempty"`
}

// GoogleCloudIdentitytoolkitAdminV2SpConfigInput
// The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
type GoogleCloudIdentitytoolkitAdminV2SpConfigInput struct {
	CallbackURI *string `json:"callbackUri,omitempty"`
	SpEntityID  *string `json:"spEntityId,omitempty"`
}
