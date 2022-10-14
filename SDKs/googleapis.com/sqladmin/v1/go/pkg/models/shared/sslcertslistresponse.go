package shared

type SslCertsListResponse struct {
	Items []SslCert `json:"items,omitempty"`
	Kind  *string   `json:"kind,omitempty"`
}
