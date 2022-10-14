package shared

type URLNormalization struct {
	NormalizedURL *string `json:"normalizedUrl,omitempty"`
	OriginalURL   *string `json:"originalUrl,omitempty"`
}
