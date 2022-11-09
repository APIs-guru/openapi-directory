import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy
/** 
 * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
**/
export class GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=hideInSearch" })
  hideInSearch?: boolean;

  @Metadata({ data: "json, name=showInApply" })
  showInApply?: boolean;
}
