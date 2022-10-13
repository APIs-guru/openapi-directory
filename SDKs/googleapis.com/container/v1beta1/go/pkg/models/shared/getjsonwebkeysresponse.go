package shared

type GetJSONWebKeysResponse struct {
	CacheHeader *HTTPCacheControlResponseHeader `json:"cacheHeader"`
	Keys        []Jwk                           `json:"keys"`
}
