package shared

type FieldValueChange struct {
	DisplayName *string     `json:"displayName"`
	FieldID     *string     `json:"fieldId"`
	NewValue    *FieldValue `json:"newValue"`
	OldValue    *FieldValue `json:"oldValue"`
}
