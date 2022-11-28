import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VpnTunnelInfoRoutingTypeEnum {
    RoutingTypeUnspecified = "ROUTING_TYPE_UNSPECIFIED",
    RouteBased = "ROUTE_BASED",
    PolicyBased = "POLICY_BASED",
    Dynamic = "DYNAMIC"
}
/**
 * For display only. Metadata associated with a Compute Engine VPN tunnel.
**/
export declare class VpnTunnelInfo extends SpeakeasyBase {
    displayName?: string;
    networkUri?: string;
    region?: string;
    remoteGateway?: string;
    remoteGatewayIp?: string;
    routingType?: VpnTunnelInfoRoutingTypeEnum;
    sourceGateway?: string;
    sourceGatewayIp?: string;
    uri?: string;
}
