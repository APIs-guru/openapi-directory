package shared

type Macro struct {
	AccountID       *string     `json:"accountId"`
	ContainerID     *string     `json:"containerId"`
	DisablingRuleID []string    `json:"disablingRuleId"`
	EnablingRuleID  []string    `json:"enablingRuleId"`
	Fingerprint     *string     `json:"fingerprint"`
	MacroID         *string     `json:"macroId"`
	Name            *string     `json:"name"`
	Notes           *string     `json:"notes"`
	Parameter       []Parameter `json:"parameter"`
	ParentFolderID  *string     `json:"parentFolderId"`
	ScheduleEndMs   *string     `json:"scheduleEndMs"`
	ScheduleStartMs *string     `json:"scheduleStartMs"`
	Type            *string     `json:"type"`
}
