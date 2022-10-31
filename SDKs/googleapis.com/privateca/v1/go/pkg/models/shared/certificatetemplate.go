package shared



type CertificateTemplate struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    IdentityConstraints *CertificateIdentityConstraints `json:"identityConstraints,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions,omitempty"`
    PredefinedValues *X509Parameters `json:"predefinedValues,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

