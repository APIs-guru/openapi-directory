import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV1Condition
/** 
 * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
**/
export class GoogleCloudRunV1Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastTransitionTime" })
  lastTransitionTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
