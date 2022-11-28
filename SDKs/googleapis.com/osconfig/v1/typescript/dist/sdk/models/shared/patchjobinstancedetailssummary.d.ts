import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
**/
export declare class PatchJobInstanceDetailsSummary extends SpeakeasyBase {
    ackedInstanceCount?: string;
    applyingPatchesInstanceCount?: string;
    downloadingPatchesInstanceCount?: string;
    failedInstanceCount?: string;
    inactiveInstanceCount?: string;
    noAgentDetectedInstanceCount?: string;
    notifiedInstanceCount?: string;
    pendingInstanceCount?: string;
    postPatchStepInstanceCount?: string;
    prePatchStepInstanceCount?: string;
    rebootingInstanceCount?: string;
    startedInstanceCount?: string;
    succeededInstanceCount?: string;
    succeededRebootRequiredInstanceCount?: string;
    timedOutInstanceCount?: string;
}
