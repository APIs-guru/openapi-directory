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
	CreationTime   *string                  `json:"creationTime"`
	Description    *string                  `json:"description"`
	DiskSizeBytes  *string                  `json:"diskSizeBytes"`
	ID             *string                  `json:"id"`
	ProjectID      *string                  `json:"projectId"`
	PubsubMetadata []PubsubSnapshotMetadata `json:"pubsubMetadata"`
	Region         *string                  `json:"region"`
	SourceJobID    *string                  `json:"sourceJobId"`
	State          *SnapshotStateEnum       `json:"state"`
	TTL            *string                  `json:"ttl"`
}
