import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VpnTunnelInfoRoutingTypeEnum {
    RoutingTypeUnspecified = "ROUTING_TYPE_UNSPECIFIED",
    RouteBased = "ROUTE_BASED",
    PolicyBased = "POLICY_BASED",
    Dynamic = "DYNAMIC"
}


// VpnTunnelInfo
/** 
 * For display only. Metadata associated with a Compute Engine VPN tunnel.
**/
export class VpnTunnelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteGateway" })
  remoteGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteGatewayIp" })
  remoteGatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=routingType" })
  routingType?: VpnTunnelInfoRoutingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceGateway" })
  sourceGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceGatewayIp" })
  sourceGatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
