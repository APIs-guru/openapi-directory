package shared

type QueryDriveActivityResponse struct {
	Activities    []DriveActivity `json:"activities"`
	NextPageToken *string         `json:"nextPageToken"`
}
