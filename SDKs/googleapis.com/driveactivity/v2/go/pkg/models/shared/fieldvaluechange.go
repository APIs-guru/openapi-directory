package shared

// FieldValueChange
// Change to a Field value.
type FieldValueChange struct {
	DisplayName *string     `json:"displayName,omitempty"`
	FieldID     *string     `json:"fieldId,omitempty"`
	NewValue    *FieldValue `json:"newValue,omitempty"`
	OldValue    *FieldValue `json:"oldValue,omitempty"`
}
