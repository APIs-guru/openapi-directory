package shared

type MysqlSslConfig struct {
	CaCertificate        *string `json:"caCertificate"`
	CaCertificateSet     *bool   `json:"caCertificateSet"`
	ClientCertificate    *string `json:"clientCertificate"`
	ClientCertificateSet *bool   `json:"clientCertificateSet"`
	ClientKey            *string `json:"clientKey"`
	ClientKeySet         *bool   `json:"clientKeySet"`
}
