package shared



type TargetReference struct {
    Drive *DriveReference `json:"drive,omitempty"`
    DriveItem *DriveItemReference `json:"driveItem,omitempty"`
    TeamDrive *TeamDriveReference `json:"teamDrive,omitempty"`
    
}

