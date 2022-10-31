package shared

type CorsSettings struct {
	AllowCredentials bool     `json:"allowCredentials"`
	AllowHeaders     []string `json:"allowHeaders"`
	AllowMethods     []string `json:"allowMethods"`
	AllowOrigin      string   `json:"allowOrigin"`
	Enabled          bool     `json:"enabled"`
	ExcludedPatterns []string `json:"excludedPatterns"`
	ExposeHeaders    []string `json:"exposeHeaders"`
	MaxAge           int32    `json:"maxAge"`
}
