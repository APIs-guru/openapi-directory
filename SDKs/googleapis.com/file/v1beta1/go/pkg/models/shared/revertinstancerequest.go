package shared

// RevertInstanceRequest
// RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
type RevertInstanceRequest struct {
	TargetSnapshotID *string `json:"targetSnapshotId,omitempty"`
}
