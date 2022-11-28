import { SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";
/**
 * A request message to initiate patching across Compute Engine instances.
**/
export declare class ExecutePatchJobRequest extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    dryRun?: boolean;
    duration?: string;
    instanceFilter?: PatchInstanceFilter;
    patchConfig?: PatchConfig;
    rollout?: PatchRollout;
}
