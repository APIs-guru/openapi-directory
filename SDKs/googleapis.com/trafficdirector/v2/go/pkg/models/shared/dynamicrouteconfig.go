package shared



type DynamicRouteConfig struct {
    LastUpdated *string `json:"lastUpdated,omitempty"`
    RouteConfig map[string]interface{} `json:"routeConfig,omitempty"`
    VersionInfo *string `json:"versionInfo,omitempty"`
    
}

