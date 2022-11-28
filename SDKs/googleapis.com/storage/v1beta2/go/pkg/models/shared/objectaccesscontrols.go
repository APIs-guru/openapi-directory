package shared

// ObjectAccessControls
// An access-control list.
type ObjectAccessControls struct {
	Items []interface{} `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}
