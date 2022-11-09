import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpnGatewayInfo
/** 
 * For display only. Metadata associated with a Compute Engine VPN gateway.
**/
export class VpnGatewayInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=vpnTunnelUri" })
  vpnTunnelUri?: string;
}
