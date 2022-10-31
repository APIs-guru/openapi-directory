package shared

type TeamDrive struct {
	Name  *string    `json:"name,omitempty"`
	Root  *DriveItem `json:"root,omitempty"`
	Title *string    `json:"title,omitempty"`
}
