import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkConfig
/** 
 * Network related configurations.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableExternalIps" })
  enableExternalIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
