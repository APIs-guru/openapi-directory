import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessConfig } from "./accessconfig";


// NetworkInterface
/** 
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessConfigs", elemType: shared.AccessConfig })
  accessConfigs?: AccessConfig[];

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkIp" })
  networkIp?: string;
}
