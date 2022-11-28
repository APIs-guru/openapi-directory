package shared

// Guaranteed
// Guaranteed tier definition.
type Guaranteed struct {
	MinDuration *string `json:"minDuration,omitempty"`
	Reserved    *bool   `json:"reserved,omitempty"`
}
