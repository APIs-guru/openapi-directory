import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";


export enum PatchRolloutModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    ZoneByZone = "ZONE_BY_ZONE",
    ConcurrentZones = "CONCURRENT_ZONES"
}


// PatchRollout
/** 
 * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
**/
export class PatchRollout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruptionBudget" })
  disruptionBudget?: FixedOrPercent;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: PatchRolloutModeEnum;
}
