import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchJobInstanceDetailsSummary } from "./patchjobinstancedetailssummary";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";


export enum PatchJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    InstanceLookup = "INSTANCE_LOOKUP",
    Patching = "PATCHING",
    Succeeded = "SUCCEEDED",
    CompletedWithErrors = "COMPLETED_WITH_ERRORS",
    Canceled = "CANCELED",
    TimedOut = "TIMED_OUT"
}


// PatchJob
/** 
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
**/
export class PatchJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceDetailsSummary" })
  instanceDetailsSummary?: PatchJobInstanceDetailsSummary;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @SpeakeasyMetadata({ data: "json, name=patchDeployment" })
  patchDeployment?: string;

  @SpeakeasyMetadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PatchJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
