package shared

type HTTPRouteCorsPolicy struct {
	AllowCredentials   *bool    `json:"allowCredentials"`
	AllowHeaders       []string `json:"allowHeaders"`
	AllowMethods       []string `json:"allowMethods"`
	AllowOriginRegexes []string `json:"allowOriginRegexes"`
	AllowOrigins       []string `json:"allowOrigins"`
	Disabled           *bool    `json:"disabled"`
	ExposeHeaders      []string `json:"exposeHeaders"`
	MaxAge             *string  `json:"maxAge"`
}
