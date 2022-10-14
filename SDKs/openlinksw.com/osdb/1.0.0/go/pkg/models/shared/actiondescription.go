package shared

type ActionDescription struct {
	ActionID    string     `json:"action_id"`
	Description *string    `json:"description,omitempty"`
	EntryPoint  EntryPoint `json:"entry_point"`
}
