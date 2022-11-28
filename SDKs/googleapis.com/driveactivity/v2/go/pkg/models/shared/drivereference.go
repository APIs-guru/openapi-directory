package shared

// DriveReference
// A lightweight reference to a shared drive.
type DriveReference struct {
	Name  *string `json:"name,omitempty"`
	Title *string `json:"title,omitempty"`
}
