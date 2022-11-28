import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";



// PrivatePoolV1Config
/** 
 * Configuration for a V1 `PrivatePool`.
**/
export class PrivatePoolV1Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: WorkerConfig;
}
