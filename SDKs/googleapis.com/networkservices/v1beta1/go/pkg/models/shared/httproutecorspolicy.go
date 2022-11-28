package shared

// HTTPRouteCorsPolicy
// The Specification for allowing client side cross-origin requests.
type HTTPRouteCorsPolicy struct {
	AllowCredentials   *bool    `json:"allowCredentials,omitempty"`
	AllowHeaders       []string `json:"allowHeaders,omitempty"`
	AllowMethods       []string `json:"allowMethods,omitempty"`
	AllowOriginRegexes []string `json:"allowOriginRegexes,omitempty"`
	AllowOrigins       []string `json:"allowOrigins,omitempty"`
	Disabled           *bool    `json:"disabled,omitempty"`
	ExposeHeaders      []string `json:"exposeHeaders,omitempty"`
	MaxAge             *string  `json:"maxAge,omitempty"`
}
