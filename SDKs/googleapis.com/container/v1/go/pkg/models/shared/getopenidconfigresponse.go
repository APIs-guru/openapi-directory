package shared

type GetOpenIDConfigResponse struct {
	CacheHeader                      *HTTPCacheControlResponseHeader `json:"cacheHeader,omitempty"`
	ClaimsSupported                  []string                        `json:"claims_supported,omitempty"`
	GrantTypes                       []string                        `json:"grant_types,omitempty"`
	IDTokenSigningAlgValuesSupported []string                        `json:"id_token_signing_alg_values_supported,omitempty"`
	Issuer                           *string                         `json:"issuer,omitempty"`
	JwksURI                          *string                         `json:"jwks_uri,omitempty"`
	ResponseTypesSupported           []string                        `json:"response_types_supported,omitempty"`
	SubjectTypesSupported            []string                        `json:"subject_types_supported,omitempty"`
}
