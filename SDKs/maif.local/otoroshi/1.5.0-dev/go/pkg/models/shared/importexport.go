package shared

import (
"time")

type ImportExportAdmins struct {
    CreatedAt int64 `json:"createdAt"`
    Label string `json:"label"`
    Password string `json:"password"`
    Registration map[string]string `json:"registration"`
    Username string `json:"username"`
    
}

type ImportExportAPIKeys struct {
    AuthorizedEntities []string `json:"authorizedEntities"`
    ClientID string `json:"clientId"`
    ClientName string `json:"clientName"`
    ClientSecret string `json:"clientSecret"`
    DailyQuota *int64 `json:"dailyQuota,omitempty"`
    Enabled bool `json:"enabled"`
    Metadata map[string]string `json:"metadata,omitempty"`
    MonthlyQuota *int64 `json:"monthlyQuota,omitempty"`
    ThrottlingQuota *int64 `json:"throttlingQuota,omitempty"`
    
}

type ImportExportErrorTemplates struct {
    Messages map[string]string `json:"messages"`
    ServiceID string `json:"serviceId"`
    Template40x string `json:"template40x"`
    Template50x string `json:"template50x"`
    TemplateBuild string `json:"templateBuild"`
    TemplateMaintenance string `json:"templateMaintenance"`
    
}

type ImportExportServiceDescriptors struct {
    Canary *Canary `json:"Canary,omitempty"`
    AdditionalHeaders map[string]string `json:"additionalHeaders,omitempty"`
    API *ExposedAPI `json:"api,omitempty"`
    AuthConfigRef *string `json:"authConfigRef,omitempty"`
    BuildMode bool `json:"buildMode"`
    ChaosConfig *ChaosConfig `json:"chaosConfig,omitempty"`
    ClientConfig *ClientConfig `json:"clientConfig,omitempty"`
    ClientValidatorRef *string `json:"clientValidatorRef,omitempty"`
    Cors *CorsSettings `json:"cors,omitempty"`
    Domain string `json:"domain"`
    Enabled bool `json:"enabled"`
    EnforceSecureCommunication bool `json:"enforceSecureCommunication"`
    Env string `json:"env"`
    ForceHTTPS bool `json:"forceHttps"`
    Groups []string `json:"groups"`
    Gzip *Gzip `json:"gzip,omitempty"`
    HeadersVerification map[string]string `json:"headersVerification,omitempty"`
    HealthCheck *HealthCheck `json:"healthCheck,omitempty"`
    ID string `json:"id"`
    IPFiltering *IPFiltering `json:"ipFiltering,omitempty"`
    JwtVerifier *interface{} `json:"jwtVerifier,omitempty"`
    LocalHost *string `json:"localHost,omitempty"`
    LocalScheme *string `json:"localScheme,omitempty"`
    MaintenanceMode bool `json:"maintenanceMode"`
    MatchingHeaders map[string]string `json:"matchingHeaders,omitempty"`
    MatchingRoot *string `json:"matchingRoot,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name string `json:"name"`
    OverrideHost *bool `json:"overrideHost,omitempty"`
    PrivateApp bool `json:"privateApp"`
    PrivatePatterns []string `json:"privatePatterns,omitempty"`
    PublicPatterns []string `json:"publicPatterns,omitempty"`
    RedirectToLocal *bool `json:"redirectToLocal,omitempty"`
    Redirection *RedirectionSettings `json:"redirection,omitempty"`
    Root string `json:"root"`
    SecComExcludedPatterns []string `json:"secComExcludedPatterns,omitempty"`
    SecComSettings *interface{} `json:"secComSettings,omitempty"`
    SendOtoroshiHeadersBack *bool `json:"sendOtoroshiHeadersBack,omitempty"`
    StatsdConfig *StatsdConfig `json:"statsdConfig,omitempty"`
    Subdomain string `json:"subdomain"`
    Targets []Target `json:"targets"`
    TransformerRef *string `json:"transformerRef,omitempty"`
    UserFacing *bool `json:"userFacing,omitempty"`
    XForwardedHeaders *bool `json:"xForwardedHeaders,omitempty"`
    
}

type ImportExportServiceGroups struct {
    Description *string `json:"description,omitempty"`
    ID string `json:"id"`
    Name string `json:"name"`
    
}

type ImportExportSimpleAdmins struct {
    CreatedAt int64 `json:"createdAt"`
    Label string `json:"label"`
    Password string `json:"password"`
    Username string `json:"username"`
    
}

type ImportExport struct {
    Admins []ImportExportAdmins `json:"admins"`
    APIKeys []ImportExportAPIKeys `json:"apiKeys"`
    AppConfig map[string]string `json:"appConfig,omitempty"`
    Config GlobalConfig `json:"config"`
    Date time.Time `json:"date"`
    DateRaw int64 `json:"dateRaw"`
    ErrorTemplates []ImportExportErrorTemplates `json:"errorTemplates"`
    Label string `json:"label"`
    ServiceDescriptors []ImportExportServiceDescriptors `json:"serviceDescriptors"`
    ServiceGroups []ImportExportServiceGroups `json:"serviceGroups"`
    SimpleAdmins []ImportExportSimpleAdmins `json:"simpleAdmins"`
    Stats ImportExportStats `json:"stats"`
    
}

