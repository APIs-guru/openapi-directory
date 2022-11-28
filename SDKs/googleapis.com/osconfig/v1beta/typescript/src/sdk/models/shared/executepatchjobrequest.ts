import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";



// ExecutePatchJobRequest
/** 
 * A request message to initiate patching across Compute Engine instances.
**/
export class ExecutePatchJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;
}
