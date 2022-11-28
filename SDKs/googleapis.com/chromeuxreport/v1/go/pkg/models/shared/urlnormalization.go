package shared

// URLNormalization
// Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
type URLNormalization struct {
	NormalizedURL *string `json:"normalizedUrl,omitempty"`
	OriginalURL   *string `json:"originalUrl,omitempty"`
}
