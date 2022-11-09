import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkConfig
/** 
 * Network related configurations.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @Metadata({ data: "json, name=enableExternalIps" })
  enableExternalIps?: boolean;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
