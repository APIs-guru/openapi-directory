package shared



type InlineScopedRouteConfigs struct {
    LastUpdated *string `json:"lastUpdated,omitempty"`
    Name *string `json:"name,omitempty"`
    ScopedRouteConfigs []map[string]interface{} `json:"scopedRouteConfigs,omitempty"`
    
}

