package shared

// GoogleAppsDriveLabelsV2LabelSchemaCapabilities
// The capabilities related to this label when editing the label.
type GoogleAppsDriveLabelsV2LabelSchemaCapabilities struct {
	CanDelete  *bool `json:"canDelete,omitempty"`
	CanDisable *bool `json:"canDisable,omitempty"`
	CanEnable  *bool `json:"canEnable,omitempty"`
	CanUpdate  *bool `json:"canUpdate,omitempty"`
}
