package shared

// GuestAttributesEntry
// A guest attributes namespace/key/value entry.
type GuestAttributesEntry struct {
	Key       *string `json:"key,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Value     *string `json:"value,omitempty"`
}
