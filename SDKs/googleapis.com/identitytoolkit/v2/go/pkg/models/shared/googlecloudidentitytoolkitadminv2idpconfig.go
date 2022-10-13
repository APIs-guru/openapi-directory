package shared

type GoogleCloudIdentitytoolkitAdminV2IdpConfig struct {
	IdpCertificates []GoogleCloudIdentitytoolkitAdminV2IdpCertificate `json:"idpCertificates"`
	IdpEntityID     *string                                           `json:"idpEntityId"`
	SignRequest     *bool                                             `json:"signRequest"`
	SsoURL          *string                                           `json:"ssoUrl"`
}
