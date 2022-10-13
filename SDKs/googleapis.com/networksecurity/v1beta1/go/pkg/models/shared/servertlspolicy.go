package shared

type ServerTLSPolicy struct {
	AllowOpen         *bool                                                 `json:"allowOpen"`
	CreateTime        *string                                               `json:"createTime"`
	Description       *string                                               `json:"description"`
	Labels            map[string]string                                     `json:"labels"`
	MtlsPolicy        *MtlsPolicy                                           `json:"mtlsPolicy"`
	Name              *string                                               `json:"name"`
	ServerCertificate *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"serverCertificate"`
	UpdateTime        *string                                               `json:"updateTime"`
}
