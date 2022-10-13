package shared

type TeamDriveList struct {
	Items         []TeamDrive `json:"items"`
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
}
