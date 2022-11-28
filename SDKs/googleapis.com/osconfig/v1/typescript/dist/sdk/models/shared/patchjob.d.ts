import { SpeakeasyBase } from "../../../internal/utils";
import { PatchJobInstanceDetailsSummary } from "./patchjobinstancedetailssummary";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";
export declare enum PatchJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    InstanceLookup = "INSTANCE_LOOKUP",
    Patching = "PATCHING",
    Succeeded = "SUCCEEDED",
    CompletedWithErrors = "COMPLETED_WITH_ERRORS",
    Canceled = "CANCELED",
    TimedOut = "TIMED_OUT"
}
/**
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use ListPatchJobInstanceDetails. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
**/
export declare class PatchJob extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    dryRun?: boolean;
    duration?: string;
    errorMessage?: string;
    instanceDetailsSummary?: PatchJobInstanceDetailsSummary;
    instanceFilter?: PatchInstanceFilter;
    name?: string;
    patchConfig?: PatchConfig;
    patchDeployment?: string;
    percentComplete?: number;
    rollout?: PatchRollout;
    state?: PatchJobStateEnum;
    updateTime?: string;
}
