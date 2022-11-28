import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RouteInfoNextHopTypeEnum {
    NextHopTypeUnspecified = "NEXT_HOP_TYPE_UNSPECIFIED",
    NextHopIp = "NEXT_HOP_IP",
    NextHopInstance = "NEXT_HOP_INSTANCE",
    NextHopNetwork = "NEXT_HOP_NETWORK",
    NextHopPeering = "NEXT_HOP_PEERING",
    NextHopInterconnect = "NEXT_HOP_INTERCONNECT",
    NextHopVpnTunnel = "NEXT_HOP_VPN_TUNNEL",
    NextHopVpnGateway = "NEXT_HOP_VPN_GATEWAY",
    NextHopInternetGateway = "NEXT_HOP_INTERNET_GATEWAY",
    NextHopBlackhole = "NEXT_HOP_BLACKHOLE",
    NextHopIlb = "NEXT_HOP_ILB",
    NextHopRouterAppliance = "NEXT_HOP_ROUTER_APPLIANCE"
}
export declare enum RouteInfoRouteTypeEnum {
    RouteTypeUnspecified = "ROUTE_TYPE_UNSPECIFIED",
    Subnet = "SUBNET",
    Static = "STATIC",
    Dynamic = "DYNAMIC",
    PeeringSubnet = "PEERING_SUBNET",
    PeeringStatic = "PEERING_STATIC",
    PeeringDynamic = "PEERING_DYNAMIC",
    PolicyBased = "POLICY_BASED"
}
/**
 * For display only. Metadata associated with a Compute Engine route.
**/
export declare class RouteInfo extends SpeakeasyBase {
    destIpRange?: string;
    destPortRanges?: string[];
    displayName?: string;
    instanceTags?: string[];
    networkUri?: string;
    nextHop?: string;
    nextHopType?: RouteInfoNextHopTypeEnum;
    priority?: number;
    protocols?: string[];
    routeType?: RouteInfoRouteTypeEnum;
    srcIpRange?: string;
    srcPortRanges?: string[];
    uri?: string;
}
