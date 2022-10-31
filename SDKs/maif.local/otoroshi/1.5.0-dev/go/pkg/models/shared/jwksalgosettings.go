package shared

type JwksAlgoSettings struct {
	Headers map[string]string `json:"headers,omitempty"`
	Kty     *string           `json:"kty,omitempty"`
	Timeout *int64            `json:"timeout,omitempty"`
	TTL     *int64            `json:"ttl,omitempty"`
	Type    string            `json:"type"`
	URL     *string           `json:"url,omitempty"`
}
