package shared

type PatchDeploymentStateEnum string

const (
	PatchDeploymentStateEnumStateUnspecified PatchDeploymentStateEnum = "STATE_UNSPECIFIED"
	PatchDeploymentStateEnumActive           PatchDeploymentStateEnum = "ACTIVE"
	PatchDeploymentStateEnumPaused           PatchDeploymentStateEnum = "PAUSED"
)

// PatchDeploymentInput
// Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
type PatchDeploymentInput struct {
	Description       *string                 `json:"description,omitempty"`
	Duration          *string                 `json:"duration,omitempty"`
	InstanceFilter    *PatchInstanceFilter    `json:"instanceFilter,omitempty"`
	Name              *string                 `json:"name,omitempty"`
	OneTimeSchedule   *OneTimeSchedule        `json:"oneTimeSchedule,omitempty"`
	PatchConfig       *PatchConfig            `json:"patchConfig,omitempty"`
	RecurringSchedule *RecurringScheduleInput `json:"recurringSchedule,omitempty"`
	Rollout           *PatchRollout           `json:"rollout,omitempty"`
}

// PatchDeployment
// Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
type PatchDeployment struct {
	CreateTime        *string                   `json:"createTime,omitempty"`
	Description       *string                   `json:"description,omitempty"`
	Duration          *string                   `json:"duration,omitempty"`
	InstanceFilter    *PatchInstanceFilter      `json:"instanceFilter,omitempty"`
	LastExecuteTime   *string                   `json:"lastExecuteTime,omitempty"`
	Name              *string                   `json:"name,omitempty"`
	OneTimeSchedule   *OneTimeSchedule          `json:"oneTimeSchedule,omitempty"`
	PatchConfig       *PatchConfig              `json:"patchConfig,omitempty"`
	RecurringSchedule *RecurringSchedule        `json:"recurringSchedule,omitempty"`
	Rollout           *PatchRollout             `json:"rollout,omitempty"`
	State             *PatchDeploymentStateEnum `json:"state,omitempty"`
	UpdateTime        *string                   `json:"updateTime,omitempty"`
}
