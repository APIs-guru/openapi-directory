package shared

// ClientTLSPolicyInput
// ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
type ClientTLSPolicyInput struct {
	ClientCertificate  *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"clientCertificate,omitempty"`
	Description        *string                                               `json:"description,omitempty"`
	Labels             map[string]string                                     `json:"labels,omitempty"`
	Name               *string                                               `json:"name,omitempty"`
	ServerValidationCa []ValidationCa                                        `json:"serverValidationCa,omitempty"`
	Sni                *string                                               `json:"sni,omitempty"`
}

// ClientTLSPolicy
// ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
type ClientTLSPolicy struct {
	ClientCertificate  *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"clientCertificate,omitempty"`
	CreateTime         *string                                               `json:"createTime,omitempty"`
	Description        *string                                               `json:"description,omitempty"`
	Labels             map[string]string                                     `json:"labels,omitempty"`
	Name               *string                                               `json:"name,omitempty"`
	ServerValidationCa []ValidationCa                                        `json:"serverValidationCa,omitempty"`
	Sni                *string                                               `json:"sni,omitempty"`
	UpdateTime         *string                                               `json:"updateTime,omitempty"`
}
