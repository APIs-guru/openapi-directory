package shared

// Owner
// Information about the owner of a Drive item.
type Owner struct {
	Domain    *Domain             `json:"domain,omitempty"`
	Drive     *DriveReference     `json:"drive,omitempty"`
	TeamDrive *TeamDriveReference `json:"teamDrive,omitempty"`
	User      *User               `json:"user,omitempty"`
}
