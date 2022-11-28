import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy
/** 
 * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
**/
export class GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hideInSearch" })
  hideInSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showInApply" })
  showInApply?: boolean;
}
