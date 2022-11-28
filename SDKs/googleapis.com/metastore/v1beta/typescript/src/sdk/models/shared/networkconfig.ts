import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerInput } from "./consumer";
import { Consumer } from "./consumer";



// NetworkConfigInput
/** 
 * Network configuration for the Dataproc Metastore service.
**/
export class NetworkConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumers", elemType: ConsumerInput })
  consumers?: ConsumerInput[];
}


// NetworkConfig
/** 
 * Network configuration for the Dataproc Metastore service.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumers", elemType: Consumer })
  consumers?: Consumer[];
}
