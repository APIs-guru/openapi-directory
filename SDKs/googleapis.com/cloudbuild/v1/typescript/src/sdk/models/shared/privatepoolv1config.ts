import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";


// PrivatePoolV1Config
/** 
 * Configuration for a V1 `PrivatePool`.
**/
export class PrivatePoolV1Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;
}
