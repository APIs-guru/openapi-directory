package shared

type PatchJobInstanceDetailsStateEnum string

const (
	PatchJobInstanceDetailsStateEnumPatchStateUnspecified   PatchJobInstanceDetailsStateEnum = "PATCH_STATE_UNSPECIFIED"
	PatchJobInstanceDetailsStateEnumPending                 PatchJobInstanceDetailsStateEnum = "PENDING"
	PatchJobInstanceDetailsStateEnumInactive                PatchJobInstanceDetailsStateEnum = "INACTIVE"
	PatchJobInstanceDetailsStateEnumNotified                PatchJobInstanceDetailsStateEnum = "NOTIFIED"
	PatchJobInstanceDetailsStateEnumStarted                 PatchJobInstanceDetailsStateEnum = "STARTED"
	PatchJobInstanceDetailsStateEnumDownloadingPatches      PatchJobInstanceDetailsStateEnum = "DOWNLOADING_PATCHES"
	PatchJobInstanceDetailsStateEnumApplyingPatches         PatchJobInstanceDetailsStateEnum = "APPLYING_PATCHES"
	PatchJobInstanceDetailsStateEnumRebooting               PatchJobInstanceDetailsStateEnum = "REBOOTING"
	PatchJobInstanceDetailsStateEnumSucceeded               PatchJobInstanceDetailsStateEnum = "SUCCEEDED"
	PatchJobInstanceDetailsStateEnumSucceededRebootRequired PatchJobInstanceDetailsStateEnum = "SUCCEEDED_REBOOT_REQUIRED"
	PatchJobInstanceDetailsStateEnumFailed                  PatchJobInstanceDetailsStateEnum = "FAILED"
	PatchJobInstanceDetailsStateEnumAcked                   PatchJobInstanceDetailsStateEnum = "ACKED"
	PatchJobInstanceDetailsStateEnumTimedOut                PatchJobInstanceDetailsStateEnum = "TIMED_OUT"
	PatchJobInstanceDetailsStateEnumRunningPrePatchStep     PatchJobInstanceDetailsStateEnum = "RUNNING_PRE_PATCH_STEP"
	PatchJobInstanceDetailsStateEnumRunningPostPatchStep    PatchJobInstanceDetailsStateEnum = "RUNNING_POST_PATCH_STEP"
	PatchJobInstanceDetailsStateEnumNoAgentDetected         PatchJobInstanceDetailsStateEnum = "NO_AGENT_DETECTED"
)

type PatchJobInstanceDetails struct {
	AttemptCount     *string                           `json:"attemptCount"`
	FailureReason    *string                           `json:"failureReason"`
	InstanceSystemID *string                           `json:"instanceSystemId"`
	Name             *string                           `json:"name"`
	State            *PatchJobInstanceDetailsStateEnum `json:"state"`
}
