package shared

// ListSnapshotsResponse
// ListSnapshotsResponse is the result of ListSnapshotsRequest.
type ListSnapshotsResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Snapshots     []Snapshot `json:"snapshots,omitempty"`
}
