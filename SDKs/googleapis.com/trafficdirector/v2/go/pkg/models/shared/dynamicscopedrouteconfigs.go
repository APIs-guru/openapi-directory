package shared

type DynamicScopedRouteConfigs struct {
	LastUpdated        *string                  `json:"lastUpdated,omitempty"`
	Name               *string                  `json:"name,omitempty"`
	ScopedRouteConfigs []map[string]interface{} `json:"scopedRouteConfigs,omitempty"`
	VersionInfo        *string                  `json:"versionInfo,omitempty"`
}
