package shared

type Certificate struct {
	CertificateDescription *CertificateDescription `json:"certificateDescription"`
	Config                 *CertificateConfig      `json:"config"`
	CreateTime             *string                 `json:"createTime"`
	Labels                 map[string]string       `json:"labels"`
	Lifetime               *string                 `json:"lifetime"`
	Name                   *string                 `json:"name"`
	PemCertificate         *string                 `json:"pemCertificate"`
	PemCertificateChain    []string                `json:"pemCertificateChain"`
	PemCsr                 *string                 `json:"pemCsr"`
	RevocationDetails      *RevocationDetails      `json:"revocationDetails"`
	UpdateTime             *string                 `json:"updateTime"`
}
