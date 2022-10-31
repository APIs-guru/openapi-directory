package shared

type TeamDriveList struct {
	Items         []TeamDrive `json:"items,omitempty"`
	Kind          *string     `json:"kind,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
