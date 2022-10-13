package shared

import (
	"time"
)

type ImportExportAdmins struct {
	CreatedAt    int64             `json:"createdAt"`
	Label        string            `json:"label"`
	Password     string            `json:"password"`
	Registration map[string]string `json:"registration"`
	Username     string            `json:"username"`
}

type ImportExportAPIKeys struct {
	AuthorizedEntities []string          `json:"authorizedEntities"`
	ClientID           string            `json:"clientId"`
	ClientName         string            `json:"clientName"`
	ClientSecret       string            `json:"clientSecret"`
	DailyQuota         *int64            `json:"dailyQuota"`
	Enabled            bool              `json:"enabled"`
	Metadata           map[string]string `json:"metadata"`
	MonthlyQuota       *int64            `json:"monthlyQuota"`
	ThrottlingQuota    *int64            `json:"throttlingQuota"`
}

type ImportExportErrorTemplates struct {
	Messages            map[string]string `json:"messages"`
	ServiceID           string            `json:"serviceId"`
	Template40x         string            `json:"template40x"`
	Template50x         string            `json:"template50x"`
	TemplateBuild       string            `json:"templateBuild"`
	TemplateMaintenance string            `json:"templateMaintenance"`
}

type ImportExportServiceDescriptors struct {
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

type ImportExportServiceGroups struct {
	Description *string `json:"description"`
	ID          string  `json:"id"`
	Name        string  `json:"name"`
}

type ImportExportSimpleAdmins struct {
	CreatedAt int64  `json:"createdAt"`
	Label     string `json:"label"`
	Password  string `json:"password"`
	Username  string `json:"username"`
}

type ImportExport struct {
	Admins             []ImportExportAdmins             `json:"admins"`
	APIKeys            []ImportExportAPIKeys            `json:"apiKeys"`
	AppConfig          map[string]string                `json:"appConfig"`
	Config             GlobalConfig                     `json:"config"`
	Date               time.Time                        `json:"date"`
	DateRaw            int64                            `json:"dateRaw"`
	ErrorTemplates     []ImportExportErrorTemplates     `json:"errorTemplates"`
	Label              string                           `json:"label"`
	ServiceDescriptors []ImportExportServiceDescriptors `json:"serviceDescriptors"`
	ServiceGroups      []ImportExportServiceGroups      `json:"serviceGroups"`
	SimpleAdmins       []ImportExportSimpleAdmins       `json:"simpleAdmins"`
	Stats              ImportExportStats                `json:"stats"`
}
