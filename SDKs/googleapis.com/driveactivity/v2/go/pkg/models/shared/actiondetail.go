package shared

// ActionDetail
// Data describing the type and additional information of an action.
type ActionDetail struct {
	AppliedLabelChange *AppliedLabelChange       `json:"appliedLabelChange,omitempty"`
	Comment            *Comment                  `json:"comment,omitempty"`
	Create             *Create                   `json:"create,omitempty"`
	Delete             *Delete                   `json:"delete,omitempty"`
	DlpChange          *DataLeakPreventionChange `json:"dlpChange,omitempty"`
	Edit               map[string]interface{}    `json:"edit,omitempty"`
	Move               *Move                     `json:"move,omitempty"`
	PermissionChange   *PermissionChange         `json:"permissionChange,omitempty"`
	Reference          *ApplicationReference     `json:"reference,omitempty"`
	Rename             *Rename                   `json:"rename,omitempty"`
	Restore            *Restore                  `json:"restore,omitempty"`
	SettingsChange     *SettingsChange           `json:"settingsChange,omitempty"`
}
