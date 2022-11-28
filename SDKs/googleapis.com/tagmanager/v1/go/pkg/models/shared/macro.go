package shared

// Macro
// Represents a Google Tag Manager Macro.
type Macro struct {
	AccountID       *string     `json:"accountId,omitempty"`
	ContainerID     *string     `json:"containerId,omitempty"`
	DisablingRuleID []string    `json:"disablingRuleId,omitempty"`
	EnablingRuleID  []string    `json:"enablingRuleId,omitempty"`
	Fingerprint     *string     `json:"fingerprint,omitempty"`
	MacroID         *string     `json:"macroId,omitempty"`
	Name            *string     `json:"name,omitempty"`
	Notes           *string     `json:"notes,omitempty"`
	Parameter       []Parameter `json:"parameter,omitempty"`
	ParentFolderID  *string     `json:"parentFolderId,omitempty"`
	ScheduleEndMs   *string     `json:"scheduleEndMs,omitempty"`
	ScheduleStartMs *string     `json:"scheduleStartMs,omitempty"`
	Type            *string     `json:"type,omitempty"`
}
