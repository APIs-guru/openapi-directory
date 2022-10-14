package shared

type SnapshotListResponse struct {
	Items         []Snapshot `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
