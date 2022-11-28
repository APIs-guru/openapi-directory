import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerConfig
/** 
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
**/
export class WorkerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;
}
