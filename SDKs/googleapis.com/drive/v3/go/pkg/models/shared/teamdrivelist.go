package shared

type TeamDriveList struct {
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
	TeamDrives    []TeamDrive `json:"teamDrives"`
}
