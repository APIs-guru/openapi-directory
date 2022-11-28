package shared

// DriveList
// A list of shared drives.
type DriveList struct {
	Items         []Drive `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
