package shared

// QueryDriveActivityResponse
// Response message for querying Drive activity.
type QueryDriveActivityResponse struct {
	Activities    []DriveActivity `json:"activities,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
