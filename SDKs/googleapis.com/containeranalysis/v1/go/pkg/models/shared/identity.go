package shared

// Identity
// The unique identifier of the update.
type Identity struct {
	Revision *int32  `json:"revision,omitempty"`
	UpdateID *string `json:"updateId,omitempty"`
}
