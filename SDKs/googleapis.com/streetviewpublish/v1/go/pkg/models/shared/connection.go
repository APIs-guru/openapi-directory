package shared

// Connection
// A connection is the link from a source photo to a destination photo.
type Connection struct {
	Target *PhotoID `json:"target,omitempty"`
}
