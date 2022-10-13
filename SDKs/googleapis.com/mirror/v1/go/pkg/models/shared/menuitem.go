package shared

type MenuItem struct {
	Action             *string     `json:"action"`
	ContextualCommand  *string     `json:"contextual_command"`
	ID                 *string     `json:"id"`
	Payload            *string     `json:"payload"`
	RemoveWhenSelected *bool       `json:"removeWhenSelected"`
	Values             []MenuValue `json:"values"`
}
