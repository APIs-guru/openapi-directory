package shared




type RoutingCurbsideStrictnessEnum string

const (
    RoutingCurbsideStrictnessEnumIgnore RoutingCurbsideStrictnessEnum = "ignore"
RoutingCurbsideStrictnessEnumSoft RoutingCurbsideStrictnessEnum = "soft"
RoutingCurbsideStrictnessEnumStrict RoutingCurbsideStrictnessEnum = "strict"
)



type RoutingNetworkDataProviderEnum string

const (
    RoutingNetworkDataProviderEnumOpenstreetmap RoutingNetworkDataProviderEnum = "openstreetmap"
RoutingNetworkDataProviderEnumTomtom RoutingNetworkDataProviderEnum = "tomtom"
)



type RoutingSnapPreventionsEnum string

const (
    RoutingSnapPreventionsEnumMotorway RoutingSnapPreventionsEnum = "motorway"
RoutingSnapPreventionsEnumTrunk RoutingSnapPreventionsEnum = "trunk"
RoutingSnapPreventionsEnumBridge RoutingSnapPreventionsEnum = "bridge"
RoutingSnapPreventionsEnumFord RoutingSnapPreventionsEnum = "ford"
RoutingSnapPreventionsEnumTunnel RoutingSnapPreventionsEnum = "tunnel"
RoutingSnapPreventionsEnumFerry RoutingSnapPreventionsEnum = "ferry"
)


type Routing struct {
    CalcPoints *bool `json:"calc_points,omitempty"`
    ConsiderTraffic *bool `json:"consider_traffic,omitempty"`
    CurbsideStrictness *RoutingCurbsideStrictnessEnum `json:"curbside_strictness,omitempty"`
    FailFast *bool `json:"fail_fast,omitempty"`
    NetworkDataProvider *RoutingNetworkDataProviderEnum `json:"network_data_provider,omitempty"`
    ReturnSnappedWaypoints *bool `json:"return_snapped_waypoints,omitempty"`
    SnapPreventions []RoutingSnapPreventionsEnum `json:"snap_preventions,omitempty"`
    
}

