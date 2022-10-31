package shared



type MysqlSslConfig struct {
    CaCertificate *string `json:"caCertificate,omitempty"`
    CaCertificateSet *bool `json:"caCertificateSet,omitempty"`
    ClientCertificate *string `json:"clientCertificate,omitempty"`
    ClientCertificateSet *bool `json:"clientCertificateSet,omitempty"`
    ClientKey *string `json:"clientKey,omitempty"`
    ClientKeySet *bool `json:"clientKeySet,omitempty"`
    
}

