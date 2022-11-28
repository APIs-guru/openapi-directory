package shared

// ListSnapshotsResponse
// List of snapshots.
type ListSnapshotsResponse struct {
	Snapshots []Snapshot `json:"snapshots,omitempty"`
}
