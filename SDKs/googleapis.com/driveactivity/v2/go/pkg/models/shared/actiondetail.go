package shared

type ActionDetail struct {
	AppliedLabelChange *AppliedLabelChange       `json:"appliedLabelChange"`
	Comment            *Comment                  `json:"comment"`
	Create             *Create                   `json:"create"`
	Delete             *Delete                   `json:"delete"`
	DlpChange          *DataLeakPreventionChange `json:"dlpChange"`
	Edit               map[string]interface{}    `json:"edit"`
	Move               *Move                     `json:"move"`
	PermissionChange   *PermissionChange         `json:"permissionChange"`
	Reference          *ApplicationReference     `json:"reference"`
	Rename             *Rename                   `json:"rename"`
	Restore            *Restore                  `json:"restore"`
	SettingsChange     *SettingsChange           `json:"settingsChange"`
}
