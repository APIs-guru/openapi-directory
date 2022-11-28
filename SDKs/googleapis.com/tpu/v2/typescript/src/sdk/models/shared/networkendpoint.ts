import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";



// NetworkEndpoint
/** 
 * A network endpoint over which a TPU worker can be reached.
**/
export class NetworkEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessConfig" })
  accessConfig?: AccessConfig;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
