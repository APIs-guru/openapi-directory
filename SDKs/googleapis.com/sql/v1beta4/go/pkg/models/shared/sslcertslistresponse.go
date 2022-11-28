package shared

// SslCertsListResponse
// SslCerts list response.
type SslCertsListResponse struct {
	Items []SslCert `json:"items,omitempty"`
	Kind  *string   `json:"kind,omitempty"`
}
