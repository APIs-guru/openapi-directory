import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";


// ExecutePatchJobRequest
/** 
 * A request message to initiate patching across Compute Engine instances.
**/
export class ExecutePatchJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @Metadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @Metadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;
}
