package shared

// MysqlSslConfig
// MySQL SSL configuration information.
type MysqlSslConfig struct {
	CaCertificate        *string `json:"caCertificate,omitempty"`
	CaCertificateSet     *bool   `json:"caCertificateSet,omitempty"`
	ClientCertificate    *string `json:"clientCertificate,omitempty"`
	ClientCertificateSet *bool   `json:"clientCertificateSet,omitempty"`
	ClientKey            *string `json:"clientKey,omitempty"`
	ClientKeySet         *bool   `json:"clientKeySet,omitempty"`
}

// MysqlSslConfigInput
// MySQL SSL configuration information.
type MysqlSslConfigInput struct {
	CaCertificate     *string `json:"caCertificate,omitempty"`
	ClientCertificate *string `json:"clientCertificate,omitempty"`
	ClientKey         *string `json:"clientKey,omitempty"`
}
