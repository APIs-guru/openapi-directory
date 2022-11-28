import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatchJobInstanceDetailsSummary
/** 
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
**/
export class PatchJobInstanceDetailsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackedInstanceCount" })
  ackedInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=applyingPatchesInstanceCount" })
  applyingPatchesInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadingPatchesInstanceCount" })
  downloadingPatchesInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=failedInstanceCount" })
  failedInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=inactiveInstanceCount" })
  inactiveInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=noAgentDetectedInstanceCount" })
  noAgentDetectedInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=notifiedInstanceCount" })
  notifiedInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingInstanceCount" })
  pendingInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=postPatchStepInstanceCount" })
  postPatchStepInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=prePatchStepInstanceCount" })
  prePatchStepInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=rebootingInstanceCount" })
  rebootingInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=startedInstanceCount" })
  startedInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=succeededInstanceCount" })
  succeededInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=succeededRebootRequiredInstanceCount" })
  succeededRebootRequiredInstanceCount?: string;

  @SpeakeasyMetadata({ data: "json, name=timedOutInstanceCount" })
  timedOutInstanceCount?: string;
}
