import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LifecycleDisabledPolicy
/** 
 * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
**/
export class GoogleAppsDriveLabelsV2LifecycleDisabledPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=hideInSearch" })
  hideInSearch?: boolean;

  @Metadata({ data: "json, name=showInApply" })
  showInApply?: boolean;
}
