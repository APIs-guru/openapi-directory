import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkConfig
/** 
 * Network describes the network configuration for a `WorkerPool`.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;
}
