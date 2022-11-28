package shared

// Service
// An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
type Service struct {
	Canary                     *Canary              `json:"Canary,omitempty"`
	AdditionalHeaders          map[string]string    `json:"additionalHeaders,omitempty"`
	API                        *ExposedAPI          `json:"api,omitempty"`
	AuthConfigRef              *string              `json:"authConfigRef,omitempty"`
	BuildMode                  bool                 `json:"buildMode"`
	ChaosConfig                *ChaosConfig         `json:"chaosConfig,omitempty"`
	ClientConfig               *ClientConfig        `json:"clientConfig,omitempty"`
	ClientValidatorRef         *string              `json:"clientValidatorRef,omitempty"`
	Cors                       *CorsSettings        `json:"cors,omitempty"`
	Domain                     string               `json:"domain"`
	Enabled                    bool                 `json:"enabled"`
	EnforceSecureCommunication bool                 `json:"enforceSecureCommunication"`
	Env                        string               `json:"env"`
	ForceHTTPS                 bool                 `json:"forceHttps"`
	Groups                     []string             `json:"groups"`
	Gzip                       *Gzip                `json:"gzip,omitempty"`
	HeadersVerification        map[string]string    `json:"headersVerification,omitempty"`
	HealthCheck                *HealthCheck         `json:"healthCheck,omitempty"`
	ID                         string               `json:"id"`
	IPFiltering                *IPFiltering         `json:"ipFiltering,omitempty"`
	JwtVerifier                *interface{}         `json:"jwtVerifier,omitempty"`
	LocalHost                  *string              `json:"localHost,omitempty"`
	LocalScheme                *string              `json:"localScheme,omitempty"`
	MaintenanceMode            bool                 `json:"maintenanceMode"`
	MatchingHeaders            map[string]string    `json:"matchingHeaders,omitempty"`
	MatchingRoot               *string              `json:"matchingRoot,omitempty"`
	Metadata                   map[string]string    `json:"metadata,omitempty"`
	Name                       string               `json:"name"`
	OverrideHost               *bool                `json:"overrideHost,omitempty"`
	PrivateApp                 bool                 `json:"privateApp"`
	PrivatePatterns            []string             `json:"privatePatterns,omitempty"`
	PublicPatterns             []string             `json:"publicPatterns,omitempty"`
	RedirectToLocal            *bool                `json:"redirectToLocal,omitempty"`
	Redirection                *RedirectionSettings `json:"redirection,omitempty"`
	Root                       string               `json:"root"`
	SecComExcludedPatterns     []string             `json:"secComExcludedPatterns,omitempty"`
	SecComSettings             *interface{}         `json:"secComSettings,omitempty"`
	SendOtoroshiHeadersBack    *bool                `json:"sendOtoroshiHeadersBack,omitempty"`
	StatsdConfig               *StatsdConfig        `json:"statsdConfig,omitempty"`
	Subdomain                  string               `json:"subdomain"`
	Targets                    []Target             `json:"targets"`
	TransformerRef             *string              `json:"transformerRef,omitempty"`
	UserFacing                 *bool                `json:"userFacing,omitempty"`
	XForwardedHeaders          *bool                `json:"xForwardedHeaders,omitempty"`
}
