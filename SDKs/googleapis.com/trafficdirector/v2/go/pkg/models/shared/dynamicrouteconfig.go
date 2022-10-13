package shared

type DynamicRouteConfig struct {
	LastUpdated *string                `json:"lastUpdated"`
	RouteConfig map[string]interface{} `json:"routeConfig"`
	VersionInfo *string                `json:"versionInfo"`
}
