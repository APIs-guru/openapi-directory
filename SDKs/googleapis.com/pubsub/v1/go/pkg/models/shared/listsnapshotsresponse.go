package shared

// ListSnapshotsResponse
// Response for the `ListSnapshots` method.
type ListSnapshotsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Snapshots     []Snapshot `json:"snapshots,omitempty"`
}
