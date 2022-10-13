package shared

type SslCertsInsertResponse struct {
	ClientCert   *SslCertDetail `json:"clientCert"`
	Kind         *string        `json:"kind"`
	Operation    *Operation     `json:"operation"`
	ServerCaCert *SslCert       `json:"serverCaCert"`
}
