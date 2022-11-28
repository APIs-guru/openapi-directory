import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
export declare enum PatchRolloutModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    ZoneByZone = "ZONE_BY_ZONE",
    ConcurrentZones = "CONCURRENT_ZONES"
}
/**
 * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
**/
export declare class PatchRollout extends SpeakeasyBase {
    disruptionBudget?: FixedOrPercent;
    mode?: PatchRolloutModeEnum;
}
