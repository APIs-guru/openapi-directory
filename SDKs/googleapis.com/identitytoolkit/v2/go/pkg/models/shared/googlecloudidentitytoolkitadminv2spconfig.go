package shared

type GoogleCloudIdentitytoolkitAdminV2SpConfig struct {
	CallbackURI    *string                                          `json:"callbackUri"`
	SpCertificates []GoogleCloudIdentitytoolkitAdminV2SpCertificate `json:"spCertificates"`
	SpEntityID     *string                                          `json:"spEntityId"`
}
