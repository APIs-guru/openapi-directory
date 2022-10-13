package shared

type ProductCustomFieldFields struct {
	CustomFieldID *int32  `json:"custom_field_id"`
	ID            *int32  `json:"id"`
	Label         *string `json:"label"`
	Type          *string `json:"type"`
	Value         *string `json:"value"`
	ValueID       *string `json:"value_id"`
}
