import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatchJobInstanceDetailsStateEnum {
    PatchStateUnspecified = "PATCH_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Inactive = "INACTIVE",
    Notified = "NOTIFIED",
    Started = "STARTED",
    DownloadingPatches = "DOWNLOADING_PATCHES",
    ApplyingPatches = "APPLYING_PATCHES",
    Rebooting = "REBOOTING",
    Succeeded = "SUCCEEDED",
    SucceededRebootRequired = "SUCCEEDED_REBOOT_REQUIRED",
    Failed = "FAILED",
    Acked = "ACKED",
    TimedOut = "TIMED_OUT",
    RunningPrePatchStep = "RUNNING_PRE_PATCH_STEP",
    RunningPostPatchStep = "RUNNING_POST_PATCH_STEP",
    NoAgentDetected = "NO_AGENT_DETECTED"
}


// PatchJobInstanceDetails
/** 
 * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
**/
export class PatchJobInstanceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptCount" })
  attemptCount?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceSystemId" })
  instanceSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PatchJobInstanceDetailsStateEnum;
}
