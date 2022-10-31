package shared

type PatchDeploymentStateEnum string

const (
	PatchDeploymentStateEnumStateUnspecified PatchDeploymentStateEnum = "STATE_UNSPECIFIED"
	PatchDeploymentStateEnumActive           PatchDeploymentStateEnum = "ACTIVE"
	PatchDeploymentStateEnumPaused           PatchDeploymentStateEnum = "PAUSED"
)

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
