import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV1Condition
/** 
 * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
**/
export class GoogleCloudRunV1Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastTransitionTime" })
  lastTransitionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
