import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FixedOrPercent } from "./fixedorpercent";

export enum PatchRolloutModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    ZoneByZone = "ZONE_BY_ZONE"
,    ConcurrentZones = "CONCURRENT_ZONES"
}


// PatchRollout
/** 
 * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
**/
export class PatchRollout extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruptionBudget" })
  disruptionBudget?: FixedOrPercent;

  @Metadata({ data: "json, name=mode" })
  mode?: PatchRolloutModeEnum;
}
