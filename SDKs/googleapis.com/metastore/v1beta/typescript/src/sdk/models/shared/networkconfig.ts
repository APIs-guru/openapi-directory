import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Consumer } from "./consumer";


// NetworkConfig
/** 
 * Network configuration for the Dataproc Metastore service.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumers", elemType: shared.Consumer })
  consumers?: Consumer[];
}
