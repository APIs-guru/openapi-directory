package shared

type SslCertsInsertResponse struct {
	ClientCert   *SslCertDetail `json:"clientCert,omitempty"`
	Kind         *string        `json:"kind,omitempty"`
	Operation    *Operation     `json:"operation,omitempty"`
	ServerCaCert *SslCert       `json:"serverCaCert,omitempty"`
}
