package shared

// GetJSONWebKeysResponse
// GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
type GetJSONWebKeysResponse struct {
	CacheHeader *HTTPCacheControlResponseHeader `json:"cacheHeader,omitempty"`
	Keys        []Jwk                           `json:"keys,omitempty"`
}
