package shared

// GroupClientData
// Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
type GroupClientData struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
