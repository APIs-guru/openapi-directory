package shared

type ServerTLSPolicy struct {
	AllowOpen         *bool                                                 `json:"allowOpen,omitempty"`
	CreateTime        *string                                               `json:"createTime,omitempty"`
	Description       *string                                               `json:"description,omitempty"`
	Labels            map[string]string                                     `json:"labels,omitempty"`
	MtlsPolicy        *MtlsPolicy                                           `json:"mtlsPolicy,omitempty"`
	Name              *string                                               `json:"name,omitempty"`
	ServerCertificate *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"serverCertificate,omitempty"`
	UpdateTime        *string                                               `json:"updateTime,omitempty"`
}
