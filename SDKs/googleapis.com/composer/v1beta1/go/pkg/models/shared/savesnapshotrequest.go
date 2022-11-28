package shared

// SaveSnapshotRequest
// Request to create a snapshot of a Cloud Composer environment.
type SaveSnapshotRequest struct {
	SnapshotLocation *string `json:"snapshotLocation,omitempty"`
}
