package shared

// GoogleCloudIdentitytoolkitAdminV2IdpCertificate
// The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
type GoogleCloudIdentitytoolkitAdminV2IdpCertificate struct {
	X509Certificate *string `json:"x509Certificate,omitempty"`
}
