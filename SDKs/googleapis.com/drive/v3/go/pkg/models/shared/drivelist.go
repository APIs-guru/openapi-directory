package shared

// DriveList
// A list of shared drives.
type DriveList struct {
	Drives        []Drive `json:"drives,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
