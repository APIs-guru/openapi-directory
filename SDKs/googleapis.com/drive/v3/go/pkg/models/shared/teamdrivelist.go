package shared

type TeamDriveList struct {
	Kind          *string     `json:"kind,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	TeamDrives    []TeamDrive `json:"teamDrives,omitempty"`
}
