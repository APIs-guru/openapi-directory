package shared

// Drive
// Information about a shared drive.
type Drive struct {
	Name  *string    `json:"name,omitempty"`
	Root  *DriveItem `json:"root,omitempty"`
	Title *string    `json:"title,omitempty"`
}
