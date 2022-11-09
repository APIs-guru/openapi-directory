import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerConfig
/** 
 * Defines the configuration to be used for creating workers in the pool.
**/
export class WorkerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=noExternalIp" })
  noExternalIp?: boolean;
}
