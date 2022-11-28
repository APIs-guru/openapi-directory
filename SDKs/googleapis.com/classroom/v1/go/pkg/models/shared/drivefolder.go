package shared

// DriveFolder
// Representation of a Google Drive folder.
type DriveFolder struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	Title         *string `json:"title,omitempty"`
}
