package shared

// CertificateInput
// A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
type CertificateInput struct {
	CertificateDescription *CertificateDescription `json:"certificateDescription,omitempty"`
	Config                 *CertificateConfig      `json:"config,omitempty"`
	Labels                 map[string]string       `json:"labels,omitempty"`
	Lifetime               *string                 `json:"lifetime,omitempty"`
	PemCsr                 *string                 `json:"pemCsr,omitempty"`
	RevocationDetails      *RevocationDetails      `json:"revocationDetails,omitempty"`
}

// Certificate
// A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
type Certificate struct {
	CertificateDescription *CertificateDescription `json:"certificateDescription,omitempty"`
	Config                 *CertificateConfig      `json:"config,omitempty"`
	CreateTime             *string                 `json:"createTime,omitempty"`
	Labels                 map[string]string       `json:"labels,omitempty"`
	Lifetime               *string                 `json:"lifetime,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	PemCertificate         *string                 `json:"pemCertificate,omitempty"`
	PemCertificateChain    []string                `json:"pemCertificateChain,omitempty"`
	PemCsr                 *string                 `json:"pemCsr,omitempty"`
	RevocationDetails      *RevocationDetails      `json:"revocationDetails,omitempty"`
	UpdateTime             *string                 `json:"updateTime,omitempty"`
}
