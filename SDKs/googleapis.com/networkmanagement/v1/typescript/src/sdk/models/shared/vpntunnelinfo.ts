import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VpnTunnelInfoRoutingTypeEnum {
    RoutingTypeUnspecified = "ROUTING_TYPE_UNSPECIFIED"
,    RouteBased = "ROUTE_BASED"
,    PolicyBased = "POLICY_BASED"
,    Dynamic = "DYNAMIC"
}


// VpnTunnelInfo
/** 
 * For display only. Metadata associated with a Compute Engine VPN tunnel.
**/
export class VpnTunnelInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=remoteGateway" })
  remoteGateway?: string;

  @Metadata({ data: "json, name=remoteGatewayIp" })
  remoteGatewayIp?: string;

  @Metadata({ data: "json, name=routingType" })
  routingType?: VpnTunnelInfoRoutingTypeEnum;

  @Metadata({ data: "json, name=sourceGateway" })
  sourceGateway?: string;

  @Metadata({ data: "json, name=sourceGatewayIp" })
  sourceGatewayIp?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
