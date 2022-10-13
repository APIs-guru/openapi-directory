package shared

type Variable struct {
	AccountID          *string              `json:"accountId"`
	ContainerID        *string              `json:"containerId"`
	DisablingTriggerID []string             `json:"disablingTriggerId"`
	EnablingTriggerID  []string             `json:"enablingTriggerId"`
	Fingerprint        *string              `json:"fingerprint"`
	FormatValue        *VariableFormatValue `json:"formatValue"`
	Name               *string              `json:"name"`
	Notes              *string              `json:"notes"`
	Parameter          []Parameter          `json:"parameter"`
	ParentFolderID     *string              `json:"parentFolderId"`
	Path               *string              `json:"path"`
	ScheduleEndMs      *string              `json:"scheduleEndMs"`
	ScheduleStartMs    *string              `json:"scheduleStartMs"`
	TagManagerURL      *string              `json:"tagManagerUrl"`
	Type               *string              `json:"type"`
	VariableID         *string              `json:"variableId"`
	WorkspaceID        *string              `json:"workspaceId"`
}
