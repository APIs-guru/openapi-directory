package shared

type JwksAlgoSettings struct {
	Headers map[string]string `json:"headers"`
	Kty     *string           `json:"kty"`
	Timeout *int64            `json:"timeout"`
	TTL     *int64            `json:"ttl"`
	Type    string            `json:"type"`
	URL     *string           `json:"url"`
}
