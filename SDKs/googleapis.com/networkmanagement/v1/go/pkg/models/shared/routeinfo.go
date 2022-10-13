package shared

type RouteInfoNextHopTypeEnum string

const (
	RouteInfoNextHopTypeEnumNextHopTypeUnspecified RouteInfoNextHopTypeEnum = "NEXT_HOP_TYPE_UNSPECIFIED"
	RouteInfoNextHopTypeEnumNextHopIP              RouteInfoNextHopTypeEnum = "NEXT_HOP_IP"
	RouteInfoNextHopTypeEnumNextHopInstance        RouteInfoNextHopTypeEnum = "NEXT_HOP_INSTANCE"
	RouteInfoNextHopTypeEnumNextHopNetwork         RouteInfoNextHopTypeEnum = "NEXT_HOP_NETWORK"
	RouteInfoNextHopTypeEnumNextHopPeering         RouteInfoNextHopTypeEnum = "NEXT_HOP_PEERING"
	RouteInfoNextHopTypeEnumNextHopInterconnect    RouteInfoNextHopTypeEnum = "NEXT_HOP_INTERCONNECT"
	RouteInfoNextHopTypeEnumNextHopVpnTunnel       RouteInfoNextHopTypeEnum = "NEXT_HOP_VPN_TUNNEL"
	RouteInfoNextHopTypeEnumNextHopVpnGateway      RouteInfoNextHopTypeEnum = "NEXT_HOP_VPN_GATEWAY"
	RouteInfoNextHopTypeEnumNextHopInternetGateway RouteInfoNextHopTypeEnum = "NEXT_HOP_INTERNET_GATEWAY"
	RouteInfoNextHopTypeEnumNextHopBlackhole       RouteInfoNextHopTypeEnum = "NEXT_HOP_BLACKHOLE"
	RouteInfoNextHopTypeEnumNextHopIlb             RouteInfoNextHopTypeEnum = "NEXT_HOP_ILB"
	RouteInfoNextHopTypeEnumNextHopRouterAppliance RouteInfoNextHopTypeEnum = "NEXT_HOP_ROUTER_APPLIANCE"
)

type RouteInfoRouteTypeEnum string

const (
	RouteInfoRouteTypeEnumRouteTypeUnspecified RouteInfoRouteTypeEnum = "ROUTE_TYPE_UNSPECIFIED"
	RouteInfoRouteTypeEnumSubnet               RouteInfoRouteTypeEnum = "SUBNET"
	RouteInfoRouteTypeEnumStatic               RouteInfoRouteTypeEnum = "STATIC"
	RouteInfoRouteTypeEnumDynamic              RouteInfoRouteTypeEnum = "DYNAMIC"
	RouteInfoRouteTypeEnumPeeringSubnet        RouteInfoRouteTypeEnum = "PEERING_SUBNET"
	RouteInfoRouteTypeEnumPeeringStatic        RouteInfoRouteTypeEnum = "PEERING_STATIC"
	RouteInfoRouteTypeEnumPeeringDynamic       RouteInfoRouteTypeEnum = "PEERING_DYNAMIC"
	RouteInfoRouteTypeEnumPolicyBasedRoute     RouteInfoRouteTypeEnum = "POLICY_BASED_ROUTE"
)

type RouteInfo struct {
	DestIPRange    *string                   `json:"destIpRange"`
	DestPortRanges []string                  `json:"destPortRanges"`
	DisplayName    *string                   `json:"displayName"`
	InstanceTags   []string                  `json:"instanceTags"`
	NetworkURI     *string                   `json:"networkUri"`
	NextHop        *string                   `json:"nextHop"`
	NextHopType    *RouteInfoNextHopTypeEnum `json:"nextHopType"`
	Priority       *int32                    `json:"priority"`
	Protocols      []string                  `json:"protocols"`
	RouteType      *RouteInfoRouteTypeEnum   `json:"routeType"`
	SrcIPRange     *string                   `json:"srcIpRange"`
	SrcPortRanges  []string                  `json:"srcPortRanges"`
	URI            *string                   `json:"uri"`
}
