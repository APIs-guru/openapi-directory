import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";



// NetworkInterface
/** 
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessConfigs", elemType: AccessConfig })
  accessConfigs?: AccessConfig[];

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkIp" })
  networkIp?: string;
}
