import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkloadAltsConfig
/** 
 * Configuration for direct-path (via ALTS) with workload identity.
**/
export class WorkloadAltsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableAlts" })
  enableAlts?: boolean;
}
