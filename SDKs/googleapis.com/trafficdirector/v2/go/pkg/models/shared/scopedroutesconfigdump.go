package shared

type ScopedRoutesConfigDump struct {
	DynamicScopedRouteConfigs []DynamicScopedRouteConfigs `json:"dynamicScopedRouteConfigs"`
	InlineScopedRouteConfigs  []InlineScopedRouteConfigs  `json:"inlineScopedRouteConfigs"`
}
