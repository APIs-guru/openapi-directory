package shared




type RouteInfoNextHopTypeEnum string

const (
    RouteInfoNextHopTypeEnumNextHopTypeUnspecified RouteInfoNextHopTypeEnum = "NEXT_HOP_TYPE_UNSPECIFIED"
RouteInfoNextHopTypeEnumNextHopIP RouteInfoNextHopTypeEnum = "NEXT_HOP_IP"
RouteInfoNextHopTypeEnumNextHopInstance RouteInfoNextHopTypeEnum = "NEXT_HOP_INSTANCE"
RouteInfoNextHopTypeEnumNextHopNetwork RouteInfoNextHopTypeEnum = "NEXT_HOP_NETWORK"
RouteInfoNextHopTypeEnumNextHopPeering RouteInfoNextHopTypeEnum = "NEXT_HOP_PEERING"
RouteInfoNextHopTypeEnumNextHopInterconnect RouteInfoNextHopTypeEnum = "NEXT_HOP_INTERCONNECT"
RouteInfoNextHopTypeEnumNextHopVpnTunnel RouteInfoNextHopTypeEnum = "NEXT_HOP_VPN_TUNNEL"
RouteInfoNextHopTypeEnumNextHopVpnGateway RouteInfoNextHopTypeEnum = "NEXT_HOP_VPN_GATEWAY"
RouteInfoNextHopTypeEnumNextHopInternetGateway RouteInfoNextHopTypeEnum = "NEXT_HOP_INTERNET_GATEWAY"
RouteInfoNextHopTypeEnumNextHopBlackhole RouteInfoNextHopTypeEnum = "NEXT_HOP_BLACKHOLE"
RouteInfoNextHopTypeEnumNextHopIlb RouteInfoNextHopTypeEnum = "NEXT_HOP_ILB"
RouteInfoNextHopTypeEnumNextHopRouterAppliance RouteInfoNextHopTypeEnum = "NEXT_HOP_ROUTER_APPLIANCE"
)



type RouteInfoRouteTypeEnum string

const (
    RouteInfoRouteTypeEnumRouteTypeUnspecified RouteInfoRouteTypeEnum = "ROUTE_TYPE_UNSPECIFIED"
RouteInfoRouteTypeEnumSubnet RouteInfoRouteTypeEnum = "SUBNET"
RouteInfoRouteTypeEnumStatic RouteInfoRouteTypeEnum = "STATIC"
RouteInfoRouteTypeEnumDynamic RouteInfoRouteTypeEnum = "DYNAMIC"
RouteInfoRouteTypeEnumPeeringSubnet RouteInfoRouteTypeEnum = "PEERING_SUBNET"
RouteInfoRouteTypeEnumPeeringStatic RouteInfoRouteTypeEnum = "PEERING_STATIC"
RouteInfoRouteTypeEnumPeeringDynamic RouteInfoRouteTypeEnum = "PEERING_DYNAMIC"
RouteInfoRouteTypeEnumPolicyBasedRoute RouteInfoRouteTypeEnum = "POLICY_BASED_ROUTE"
)


type RouteInfo struct {
    DestIPRange *string `json:"destIpRange,omitempty"`
    DestPortRanges []string `json:"destPortRanges,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    InstanceTags []string `json:"instanceTags,omitempty"`
    NetworkURI *string `json:"networkUri,omitempty"`
    NextHop *string `json:"nextHop,omitempty"`
    NextHopType *RouteInfoNextHopTypeEnum `json:"nextHopType,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    Protocols []string `json:"protocols,omitempty"`
    RouteType *RouteInfoRouteTypeEnum `json:"routeType,omitempty"`
    SrcIPRange *string `json:"srcIpRange,omitempty"`
    SrcPortRanges []string `json:"srcPortRanges,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

