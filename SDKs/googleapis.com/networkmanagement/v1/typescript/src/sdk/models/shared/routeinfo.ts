import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RouteInfoNextHopTypeEnum {
    NextHopTypeUnspecified = "NEXT_HOP_TYPE_UNSPECIFIED"
,    NextHopIp = "NEXT_HOP_IP"
,    NextHopInstance = "NEXT_HOP_INSTANCE"
,    NextHopNetwork = "NEXT_HOP_NETWORK"
,    NextHopPeering = "NEXT_HOP_PEERING"
,    NextHopInterconnect = "NEXT_HOP_INTERCONNECT"
,    NextHopVpnTunnel = "NEXT_HOP_VPN_TUNNEL"
,    NextHopVpnGateway = "NEXT_HOP_VPN_GATEWAY"
,    NextHopInternetGateway = "NEXT_HOP_INTERNET_GATEWAY"
,    NextHopBlackhole = "NEXT_HOP_BLACKHOLE"
,    NextHopIlb = "NEXT_HOP_ILB"
,    NextHopRouterAppliance = "NEXT_HOP_ROUTER_APPLIANCE"
}

export enum RouteInfoRouteTypeEnum {
    RouteTypeUnspecified = "ROUTE_TYPE_UNSPECIFIED"
,    Subnet = "SUBNET"
,    Static = "STATIC"
,    Dynamic = "DYNAMIC"
,    PeeringSubnet = "PEERING_SUBNET"
,    PeeringStatic = "PEERING_STATIC"
,    PeeringDynamic = "PEERING_DYNAMIC"
,    PolicyBasedRoute = "POLICY_BASED_ROUTE"
}


// RouteInfo
/** 
 * For display only. Metadata associated with a Compute Engine route.
**/
export class RouteInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=destIpRange" })
  destIpRange?: string;

  @Metadata({ data: "json, name=destPortRanges" })
  destPortRanges?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=instanceTags" })
  instanceTags?: string[];

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=nextHop" })
  nextHop?: string;

  @Metadata({ data: "json, name=nextHopType" })
  nextHopType?: RouteInfoNextHopTypeEnum;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=protocols" })
  protocols?: string[];

  @Metadata({ data: "json, name=routeType" })
  routeType?: RouteInfoRouteTypeEnum;

  @Metadata({ data: "json, name=srcIpRange" })
  srcIpRange?: string;

  @Metadata({ data: "json, name=srcPortRanges" })
  srcPortRanges?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
