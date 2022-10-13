package shared

type PatchDeploymentStateEnum string

const (
	PatchDeploymentStateEnumStateUnspecified PatchDeploymentStateEnum = "STATE_UNSPECIFIED"
	PatchDeploymentStateEnumActive           PatchDeploymentStateEnum = "ACTIVE"
	PatchDeploymentStateEnumPaused           PatchDeploymentStateEnum = "PAUSED"
)

type PatchDeployment struct {
	CreateTime        *string                   `json:"createTime"`
	Description       *string                   `json:"description"`
	Duration          *string                   `json:"duration"`
	InstanceFilter    *PatchInstanceFilter      `json:"instanceFilter"`
	LastExecuteTime   *string                   `json:"lastExecuteTime"`
	Name              *string                   `json:"name"`
	OneTimeSchedule   *OneTimeSchedule          `json:"oneTimeSchedule"`
	PatchConfig       *PatchConfig              `json:"patchConfig"`
	RecurringSchedule *RecurringSchedule        `json:"recurringSchedule"`
	Rollout           *PatchRollout             `json:"rollout"`
	State             *PatchDeploymentStateEnum `json:"state"`
	UpdateTime        *string                   `json:"updateTime"`
}
