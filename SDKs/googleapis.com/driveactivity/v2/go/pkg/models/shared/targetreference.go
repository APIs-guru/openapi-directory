package shared

type TargetReference struct {
	Drive     *DriveReference     `json:"drive"`
	DriveItem *DriveItemReference `json:"driveItem"`
	TeamDrive *TeamDriveReference `json:"teamDrive"`
}
