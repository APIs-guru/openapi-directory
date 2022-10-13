package shared

type GetOpenIDConfigResponse struct {
	CacheHeader                      *HTTPCacheControlResponseHeader `json:"cacheHeader"`
	ClaimsSupported                  []string                        `json:"claims_supported"`
	GrantTypes                       []string                        `json:"grant_types"`
	IDTokenSigningAlgValuesSupported []string                        `json:"id_token_signing_alg_values_supported"`
	Issuer                           *string                         `json:"issuer"`
	JwksURI                          *string                         `json:"jwks_uri"`
	ResponseTypesSupported           []string                        `json:"response_types_supported"`
	SubjectTypesSupported            []string                        `json:"subject_types_supported"`
}
