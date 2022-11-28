package shared

// MenuItem
// A custom menu item that can be presented to the user by a timeline item.
type MenuItem struct {
	Action             *string     `json:"action,omitempty"`
	ContextualCommand  *string     `json:"contextual_command,omitempty"`
	ID                 *string     `json:"id,omitempty"`
	Payload            *string     `json:"payload,omitempty"`
	RemoveWhenSelected *bool       `json:"removeWhenSelected,omitempty"`
	Values             []MenuValue `json:"values,omitempty"`
}
