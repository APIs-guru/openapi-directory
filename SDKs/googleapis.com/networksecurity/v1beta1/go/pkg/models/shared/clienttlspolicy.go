package shared

type ClientTLSPolicy struct {
	ClientCertificate  *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"clientCertificate"`
	CreateTime         *string                                               `json:"createTime"`
	Description        *string                                               `json:"description"`
	Labels             map[string]string                                     `json:"labels"`
	Name               *string                                               `json:"name"`
	ServerValidationCa []ValidationCa                                        `json:"serverValidationCa"`
	Sni                *string                                               `json:"sni"`
	UpdateTime         *string                                               `json:"updateTime"`
}
