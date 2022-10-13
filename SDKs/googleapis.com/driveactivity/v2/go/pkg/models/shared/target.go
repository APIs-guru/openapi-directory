package shared

type Target struct {
	Drive       *Drive       `json:"drive"`
	DriveItem   *DriveItem   `json:"driveItem"`
	FileComment *FileComment `json:"fileComment"`
	TeamDrive   *TeamDrive   `json:"teamDrive"`
}
