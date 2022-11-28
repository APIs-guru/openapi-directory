package shared

// CertificateTemplate
// A CertificateTemplate refers to a managed template for certificate issuance.
type CertificateTemplate struct {
	CreateTime            *string                          `json:"createTime,omitempty"`
	Description           *string                          `json:"description,omitempty"`
	IdentityConstraints   *CertificateIdentityConstraints  `json:"identityConstraints,omitempty"`
	Labels                map[string]string                `json:"labels,omitempty"`
	Name                  *string                          `json:"name,omitempty"`
	PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions,omitempty"`
	PredefinedValues      *X509Parameters                  `json:"predefinedValues,omitempty"`
	UpdateTime            *string                          `json:"updateTime,omitempty"`
}

// CertificateTemplateInput
// A CertificateTemplate refers to a managed template for certificate issuance.
type CertificateTemplateInput struct {
	Description           *string                          `json:"description,omitempty"`
	IdentityConstraints   *CertificateIdentityConstraints  `json:"identityConstraints,omitempty"`
	Labels                map[string]string                `json:"labels,omitempty"`
	PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions,omitempty"`
	PredefinedValues      *X509Parameters                  `json:"predefinedValues,omitempty"`
}
