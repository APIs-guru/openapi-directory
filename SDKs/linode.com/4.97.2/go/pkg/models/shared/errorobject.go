package shared

type ErrorObject struct {
	Field  *string `json:"field"`
	Reason *string `json:"reason"`
}
