import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessConfig } from "./accessconfig";


// NetworkEndpoint
/** 
 * A network endpoint over which a TPU worker can be reached.
**/
export class NetworkEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessConfig" })
  accessConfig?: AccessConfig;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
