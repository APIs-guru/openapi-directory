package shared

type StaticRouteConfig struct {
	LastUpdated *string                `json:"lastUpdated"`
	RouteConfig map[string]interface{} `json:"routeConfig"`
}
