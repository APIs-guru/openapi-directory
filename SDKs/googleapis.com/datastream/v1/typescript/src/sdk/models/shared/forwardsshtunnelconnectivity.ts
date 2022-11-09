import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ForwardSshTunnelConnectivity
/** 
 * Forward SSH Tunnel connectivity.
**/
export class ForwardSshTunnelConnectivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
