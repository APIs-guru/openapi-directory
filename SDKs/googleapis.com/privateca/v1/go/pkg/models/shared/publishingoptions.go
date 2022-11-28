package shared

// PublishingOptions
// Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
type PublishingOptions struct {
	PublishCaCert *bool `json:"publishCaCert,omitempty"`
	PublishCrl    *bool `json:"publishCrl,omitempty"`
}
