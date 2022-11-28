package shared

// Target
// Information about the target of activity.
type Target struct {
	Drive       *Drive       `json:"drive,omitempty"`
	DriveItem   *DriveItem   `json:"driveItem,omitempty"`
	FileComment *FileComment `json:"fileComment,omitempty"`
	TeamDrive   *TeamDrive   `json:"teamDrive,omitempty"`
}
