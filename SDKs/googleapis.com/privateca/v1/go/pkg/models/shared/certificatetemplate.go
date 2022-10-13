package shared

type CertificateTemplate struct {
	CreateTime            *string                          `json:"createTime"`
	Description           *string                          `json:"description"`
	IdentityConstraints   *CertificateIdentityConstraints  `json:"identityConstraints"`
	Labels                map[string]string                `json:"labels"`
	Name                  *string                          `json:"name"`
	PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions"`
	PredefinedValues      *X509Parameters                  `json:"predefinedValues"`
	UpdateTime            *string                          `json:"updateTime"`
}
