import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatchJobInstanceDetailsSummary
/** 
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
**/
export class PatchJobInstanceDetailsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackedInstanceCount" })
  ackedInstanceCount?: string;

  @Metadata({ data: "json, name=applyingPatchesInstanceCount" })
  applyingPatchesInstanceCount?: string;

  @Metadata({ data: "json, name=downloadingPatchesInstanceCount" })
  downloadingPatchesInstanceCount?: string;

  @Metadata({ data: "json, name=failedInstanceCount" })
  failedInstanceCount?: string;

  @Metadata({ data: "json, name=inactiveInstanceCount" })
  inactiveInstanceCount?: string;

  @Metadata({ data: "json, name=noAgentDetectedInstanceCount" })
  noAgentDetectedInstanceCount?: string;

  @Metadata({ data: "json, name=notifiedInstanceCount" })
  notifiedInstanceCount?: string;

  @Metadata({ data: "json, name=pendingInstanceCount" })
  pendingInstanceCount?: string;

  @Metadata({ data: "json, name=postPatchStepInstanceCount" })
  postPatchStepInstanceCount?: string;

  @Metadata({ data: "json, name=prePatchStepInstanceCount" })
  prePatchStepInstanceCount?: string;

  @Metadata({ data: "json, name=rebootingInstanceCount" })
  rebootingInstanceCount?: string;

  @Metadata({ data: "json, name=startedInstanceCount" })
  startedInstanceCount?: string;

  @Metadata({ data: "json, name=succeededInstanceCount" })
  succeededInstanceCount?: string;

  @Metadata({ data: "json, name=succeededRebootRequiredInstanceCount" })
  succeededRebootRequiredInstanceCount?: string;

  @Metadata({ data: "json, name=timedOutInstanceCount" })
  timedOutInstanceCount?: string;
}
