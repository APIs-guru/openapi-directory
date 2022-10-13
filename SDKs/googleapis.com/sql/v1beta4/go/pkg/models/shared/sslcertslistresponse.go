package shared

type SslCertsListResponse struct {
	Items []SslCert `json:"items"`
	Kind  *string   `json:"kind"`
}
