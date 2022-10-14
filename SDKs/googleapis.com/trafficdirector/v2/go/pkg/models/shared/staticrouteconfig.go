package shared

type StaticRouteConfig struct {
	LastUpdated *string                `json:"lastUpdated,omitempty"`
	RouteConfig map[string]interface{} `json:"routeConfig,omitempty"`
}
