import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkloadAltsConfig
/** 
 * Configuration for direct-path (via ALTS) with workload identity.
**/
export class WorkloadAltsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableAlts" })
  enableAlts?: boolean;
}
