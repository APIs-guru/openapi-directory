package shared



type GetJSONWebKeysResponse struct {
    CacheHeader *HTTPCacheControlResponseHeader `json:"cacheHeader,omitempty"`
    Keys []Jwk `json:"keys,omitempty"`
    
}

