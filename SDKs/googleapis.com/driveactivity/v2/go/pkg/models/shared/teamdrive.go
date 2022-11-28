package shared

// TeamDrive
// This item is deprecated; please see `Drive` instead.
type TeamDrive struct {
	Name  *string    `json:"name,omitempty"`
	Root  *DriveItem `json:"root,omitempty"`
	Title *string    `json:"title,omitempty"`
}
