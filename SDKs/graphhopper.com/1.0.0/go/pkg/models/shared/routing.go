package shared

type RoutingCurbsideStrictnessEnum string

const (
	RoutingCurbsideStrictnessEnumIgnore RoutingCurbsideStrictnessEnum = "ignore"
	RoutingCurbsideStrictnessEnumSoft   RoutingCurbsideStrictnessEnum = "soft"
	RoutingCurbsideStrictnessEnumStrict RoutingCurbsideStrictnessEnum = "strict"
)

type RoutingNetworkDataProviderEnum string

const (
	RoutingNetworkDataProviderEnumOpenstreetmap RoutingNetworkDataProviderEnum = "openstreetmap"
	RoutingNetworkDataProviderEnumTomtom        RoutingNetworkDataProviderEnum = "tomtom"
)

type RoutingSnapPreventionsEnum string

const (
	RoutingSnapPreventionsEnumMotorway RoutingSnapPreventionsEnum = "motorway"
	RoutingSnapPreventionsEnumTrunk    RoutingSnapPreventionsEnum = "trunk"
	RoutingSnapPreventionsEnumBridge   RoutingSnapPreventionsEnum = "bridge"
	RoutingSnapPreventionsEnumFord     RoutingSnapPreventionsEnum = "ford"
	RoutingSnapPreventionsEnumTunnel   RoutingSnapPreventionsEnum = "tunnel"
	RoutingSnapPreventionsEnumFerry    RoutingSnapPreventionsEnum = "ferry"
)

type Routing struct {
	CalcPoints             *bool                           `json:"calc_points"`
	ConsiderTraffic        *bool                           `json:"consider_traffic"`
	CurbsideStrictness     *RoutingCurbsideStrictnessEnum  `json:"curbside_strictness"`
	FailFast               *bool                           `json:"fail_fast"`
	NetworkDataProvider    *RoutingNetworkDataProviderEnum `json:"network_data_provider"`
	ReturnSnappedWaypoints *bool                           `json:"return_snapped_waypoints"`
	SnapPreventions        []RoutingSnapPreventionsEnum    `json:"snap_preventions"`
}
