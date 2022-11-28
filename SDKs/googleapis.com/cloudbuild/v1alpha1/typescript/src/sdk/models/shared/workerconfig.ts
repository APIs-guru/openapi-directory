import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";



// WorkerConfig
/** 
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
**/
export class WorkerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: Network;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
