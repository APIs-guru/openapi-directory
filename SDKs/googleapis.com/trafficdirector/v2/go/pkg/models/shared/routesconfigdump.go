package shared

type RoutesConfigDump struct {
	DynamicRouteConfigs []DynamicRouteConfig `json:"dynamicRouteConfigs,omitempty"`
	StaticRouteConfigs  []StaticRouteConfig  `json:"staticRouteConfigs,omitempty"`
}
