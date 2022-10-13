package shared

type DynamicScopedRouteConfigs struct {
	LastUpdated        *string                  `json:"lastUpdated"`
	Name               *string                  `json:"name"`
	ScopedRouteConfigs []map[string]interface{} `json:"scopedRouteConfigs"`
	VersionInfo        *string                  `json:"versionInfo"`
}
