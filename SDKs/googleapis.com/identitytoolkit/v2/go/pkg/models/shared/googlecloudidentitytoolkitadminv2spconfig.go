package shared

type GoogleCloudIdentitytoolkitAdminV2SpConfig struct {
	CallbackURI    *string                                          `json:"callbackUri,omitempty"`
	SpCertificates []GoogleCloudIdentitytoolkitAdminV2SpCertificate `json:"spCertificates,omitempty"`
	SpEntityID     *string                                          `json:"spEntityId,omitempty"`
}
