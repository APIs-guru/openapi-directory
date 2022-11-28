package shared

// StaticListener
// Describes a statically loaded listener.
type StaticListener struct {
	LastUpdated *string                `json:"lastUpdated,omitempty"`
	Listener    map[string]interface{} `json:"listener,omitempty"`
}
