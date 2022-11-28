package shared

// RoutesConfigDump
// Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
type RoutesConfigDump struct {
	DynamicRouteConfigs []DynamicRouteConfig `json:"dynamicRouteConfigs,omitempty"`
	StaticRouteConfigs  []StaticRouteConfig  `json:"staticRouteConfigs,omitempty"`
}
