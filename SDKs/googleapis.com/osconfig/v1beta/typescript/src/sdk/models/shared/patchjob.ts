import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchJobInstanceDetailsSummary } from "./patchjobinstancedetailssummary";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";

export enum PatchJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Started = "STARTED"
,    InstanceLookup = "INSTANCE_LOOKUP"
,    Patching = "PATCHING"
,    Succeeded = "SUCCEEDED"
,    CompletedWithErrors = "COMPLETED_WITH_ERRORS"
,    Canceled = "CANCELED"
,    TimedOut = "TIMED_OUT"
}


// PatchJob
/** 
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
**/
export class PatchJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=instanceDetailsSummary" })
  instanceDetailsSummary?: PatchJobInstanceDetailsSummary;

  @Metadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @Metadata({ data: "json, name=patchDeployment" })
  patchDeployment?: string;

  @Metadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @Metadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;

  @Metadata({ data: "json, name=state" })
  state?: PatchJobStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
