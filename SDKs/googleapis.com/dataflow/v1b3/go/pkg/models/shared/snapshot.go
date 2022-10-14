package shared

type SnapshotStateEnum string

const (
	SnapshotStateEnumUnknownSnapshotState SnapshotStateEnum = "UNKNOWN_SNAPSHOT_STATE"
	SnapshotStateEnumPending              SnapshotStateEnum = "PENDING"
	SnapshotStateEnumRunning              SnapshotStateEnum = "RUNNING"
	SnapshotStateEnumReady                SnapshotStateEnum = "READY"
	SnapshotStateEnumFailed               SnapshotStateEnum = "FAILED"
	SnapshotStateEnumDeleted              SnapshotStateEnum = "DELETED"
)

type Snapshot struct {
	CreationTime   *string                  `json:"creationTime,omitempty"`
	Description    *string                  `json:"description,omitempty"`
	DiskSizeBytes  *string                  `json:"diskSizeBytes,omitempty"`
	ID             *string                  `json:"id,omitempty"`
	ProjectID      *string                  `json:"projectId,omitempty"`
	PubsubMetadata []PubsubSnapshotMetadata `json:"pubsubMetadata,omitempty"`
	Region         *string                  `json:"region,omitempty"`
	SourceJobID    *string                  `json:"sourceJobId,omitempty"`
	State          *SnapshotStateEnum       `json:"state,omitempty"`
	TTL            *string                  `json:"ttl,omitempty"`
}
