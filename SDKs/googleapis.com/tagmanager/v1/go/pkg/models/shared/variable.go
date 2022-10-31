package shared

type Variable struct {
	AccountID          *string     `json:"accountId,omitempty"`
	ContainerID        *string     `json:"containerId,omitempty"`
	DisablingTriggerID []string    `json:"disablingTriggerId,omitempty"`
	EnablingTriggerID  []string    `json:"enablingTriggerId,omitempty"`
	Fingerprint        *string     `json:"fingerprint,omitempty"`
	Name               *string     `json:"name,omitempty"`
	Notes              *string     `json:"notes,omitempty"`
	Parameter          []Parameter `json:"parameter,omitempty"`
	ParentFolderID     *string     `json:"parentFolderId,omitempty"`
	ScheduleEndMs      *string     `json:"scheduleEndMs,omitempty"`
	ScheduleStartMs    *string     `json:"scheduleStartMs,omitempty"`
	Type               *string     `json:"type,omitempty"`
	VariableID         *string     `json:"variableId,omitempty"`
}
