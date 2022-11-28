package shared

// Orientation
// Screen orientation of the device.
type Orientation struct {
	ID   *string  `json:"id,omitempty"`
	Name *string  `json:"name,omitempty"`
	Tags []string `json:"tags,omitempty"`
}
