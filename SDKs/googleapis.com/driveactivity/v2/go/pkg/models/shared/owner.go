package shared

type Owner struct {
	Domain    *Domain             `json:"domain"`
	Drive     *DriveReference     `json:"drive"`
	TeamDrive *TeamDriveReference `json:"teamDrive"`
	User      *User               `json:"user"`
}
