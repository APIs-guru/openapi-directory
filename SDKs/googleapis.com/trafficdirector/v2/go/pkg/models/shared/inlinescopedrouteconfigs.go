package shared

type InlineScopedRouteConfigs struct {
	LastUpdated        *string                  `json:"lastUpdated"`
	Name               *string                  `json:"name"`
	ScopedRouteConfigs []map[string]interface{} `json:"scopedRouteConfigs"`
}
