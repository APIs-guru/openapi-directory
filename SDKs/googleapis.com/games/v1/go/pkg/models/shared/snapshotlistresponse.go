package shared

// SnapshotListResponse
// A third party list snapshots response.
type SnapshotListResponse struct {
	Items         []Snapshot `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
