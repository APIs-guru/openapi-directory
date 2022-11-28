package shared

// DriveFile
// Representation of a Google Drive file.
type DriveFile struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	ThumbnailURL  *string `json:"thumbnailUrl,omitempty"`
	Title         *string `json:"title,omitempty"`
}
