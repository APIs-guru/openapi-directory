import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkEndpoint
/** 
 * A network endpoint over which a TPU worker can be reached.
**/
export class NetworkEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
