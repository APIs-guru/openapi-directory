package shared

type Service struct {
	Canary                     *Canary              `json:"Canary"`
	AdditionalHeaders          map[string]string    `json:"additionalHeaders"`
	API                        *ExposedAPI          `json:"api"`
	AuthConfigRef              *string              `json:"authConfigRef"`
	BuildMode                  bool                 `json:"buildMode"`
	ChaosConfig                *ChaosConfig         `json:"chaosConfig"`
	ClientConfig               *ClientConfig        `json:"clientConfig"`
	ClientValidatorRef         *string              `json:"clientValidatorRef"`
	Cors                       *CorsSettings        `json:"cors"`
	Domain                     string               `json:"domain"`
	Enabled                    bool                 `json:"enabled"`
	EnforceSecureCommunication bool                 `json:"enforceSecureCommunication"`
	Env                        string               `json:"env"`
	ForceHTTPS                 bool                 `json:"forceHttps"`
	Groups                     []string             `json:"groups"`
	Gzip                       *Gzip                `json:"gzip"`
	HeadersVerification        map[string]string    `json:"headersVerification"`
	HealthCheck                *HealthCheck         `json:"healthCheck"`
	ID                         string               `json:"id"`
	IPFiltering                *IPFiltering         `json:"ipFiltering"`
	JwtVerifier                *interface{}         `json:"jwtVerifier"`
	LocalHost                  *string              `json:"localHost"`
	LocalScheme                *string              `json:"localScheme"`
	MaintenanceMode            bool                 `json:"maintenanceMode"`
	MatchingHeaders            map[string]string    `json:"matchingHeaders"`
	MatchingRoot               *string              `json:"matchingRoot"`
	Metadata                   map[string]string    `json:"metadata"`
	Name                       string               `json:"name"`
	OverrideHost               *bool                `json:"overrideHost"`
	PrivateApp                 bool                 `json:"privateApp"`
	PrivatePatterns            []string             `json:"privatePatterns"`
	PublicPatterns             []string             `json:"publicPatterns"`
	RedirectToLocal            *bool                `json:"redirectToLocal"`
	Redirection                *RedirectionSettings `json:"redirection"`
	Root                       string               `json:"root"`
	SecComExcludedPatterns     []string             `json:"secComExcludedPatterns"`
	SecComSettings             *interface{}         `json:"secComSettings"`
	SendOtoroshiHeadersBack    *bool                `json:"sendOtoroshiHeadersBack"`
	StatsdConfig               *StatsdConfig        `json:"statsdConfig"`
	Subdomain                  string               `json:"subdomain"`
	Targets                    []Target             `json:"targets"`
	TransformerRef             *string              `json:"transformerRef"`
	UserFacing                 *bool                `json:"userFacing"`
	XForwardedHeaders          *bool                `json:"xForwardedHeaders"`
}
