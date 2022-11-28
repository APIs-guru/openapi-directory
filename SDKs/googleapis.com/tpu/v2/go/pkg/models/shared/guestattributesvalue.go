package shared

// GuestAttributesValue
// Array of guest attribute namespace/key/value tuples.
type GuestAttributesValue struct {
	Items []GuestAttributesEntry `json:"items,omitempty"`
}
