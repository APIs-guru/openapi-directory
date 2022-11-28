package shared

// TableFieldSchema
// A field in TableSchema.
type TableFieldSchema struct {
	Field  *string            `json:"field,omitempty"`
	Fields []TableFieldSchema `json:"fields,omitempty"`
	Mode   *string            `json:"mode,omitempty"`
	Type   *string            `json:"type,omitempty"`
}
