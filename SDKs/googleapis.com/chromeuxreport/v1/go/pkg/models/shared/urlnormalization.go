package shared

type URLNormalization struct {
	NormalizedURL *string `json:"normalizedUrl"`
	OriginalURL   *string `json:"originalUrl"`
}
