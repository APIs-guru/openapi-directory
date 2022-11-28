package shared

// ServerTLSPolicy
// ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
type ServerTLSPolicy struct {
	AllowOpen         *bool                                            `json:"allowOpen,omitempty"`
	CreateTime        *string                                          `json:"createTime,omitempty"`
	Description       *string                                          `json:"description,omitempty"`
	Labels            map[string]string                                `json:"labels,omitempty"`
	MtlsPolicy        *MtlsPolicy                                      `json:"mtlsPolicy,omitempty"`
	Name              *string                                          `json:"name,omitempty"`
	ServerCertificate *GoogleCloudNetworksecurityV1CertificateProvider `json:"serverCertificate,omitempty"`
	UpdateTime        *string                                          `json:"updateTime,omitempty"`
}

// ServerTLSPolicyInput
// ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
type ServerTLSPolicyInput struct {
	AllowOpen         *bool                                            `json:"allowOpen,omitempty"`
	Description       *string                                          `json:"description,omitempty"`
	Labels            map[string]string                                `json:"labels,omitempty"`
	MtlsPolicy        *MtlsPolicy                                      `json:"mtlsPolicy,omitempty"`
	Name              *string                                          `json:"name,omitempty"`
	ServerCertificate *GoogleCloudNetworksecurityV1CertificateProvider `json:"serverCertificate,omitempty"`
}
