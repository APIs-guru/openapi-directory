package shared

type FieldViolation struct {
	Description *string `json:"description,omitempty"`
	Field       *string `json:"field,omitempty"`
}
