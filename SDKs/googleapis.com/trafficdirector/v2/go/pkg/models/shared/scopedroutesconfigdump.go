package shared



type ScopedRoutesConfigDump struct {
    DynamicScopedRouteConfigs []DynamicScopedRouteConfigs `json:"dynamicScopedRouteConfigs,omitempty"`
    InlineScopedRouteConfigs []InlineScopedRouteConfigs `json:"inlineScopedRouteConfigs,omitempty"`
    
}

