import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Network } from "./network";


// WorkerConfig
/** 
 * WorkerConfig defines the configuration to be used for a creating workers in the pool.
**/
export class WorkerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=network" })
  network?: Network;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
