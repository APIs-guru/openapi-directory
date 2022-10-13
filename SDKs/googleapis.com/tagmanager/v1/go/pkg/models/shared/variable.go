package shared

type Variable struct {
	AccountID          *string     `json:"accountId"`
	ContainerID        *string     `json:"containerId"`
	DisablingTriggerID []string    `json:"disablingTriggerId"`
	EnablingTriggerID  []string    `json:"enablingTriggerId"`
	Fingerprint        *string     `json:"fingerprint"`
	Name               *string     `json:"name"`
	Notes              *string     `json:"notes"`
	Parameter          []Parameter `json:"parameter"`
	ParentFolderID     *string     `json:"parentFolderId"`
	ScheduleEndMs      *string     `json:"scheduleEndMs"`
	ScheduleStartMs    *string     `json:"scheduleStartMs"`
	Type               *string     `json:"type"`
	VariableID         *string     `json:"variableId"`
}
