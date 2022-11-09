import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkConfig
/** 
 * Network describes the network configuration for a `WorkerPool`.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;
}
