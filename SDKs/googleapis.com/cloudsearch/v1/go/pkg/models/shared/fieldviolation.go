package shared

type FieldViolation struct {
	Description *string `json:"description"`
	Field       *string `json:"field"`
}
