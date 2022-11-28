import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpnGatewayInfo
/** 
 * For display only. Metadata associated with a Compute Engine VPN gateway.
**/
export class VpnGatewayInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=vpnTunnelUri" })
  vpnTunnelUri?: string;
}
