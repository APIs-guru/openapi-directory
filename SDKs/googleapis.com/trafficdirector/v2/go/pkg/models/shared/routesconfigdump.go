package shared

type RoutesConfigDump struct {
	DynamicRouteConfigs []DynamicRouteConfig `json:"dynamicRouteConfigs"`
	StaticRouteConfigs  []StaticRouteConfig  `json:"staticRouteConfigs"`
}
