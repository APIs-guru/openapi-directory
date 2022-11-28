import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForwardSshTunnelConnectivity
/** 
 * Forward SSH Tunnel connectivity.
**/
export class ForwardSshTunnelConnectivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
