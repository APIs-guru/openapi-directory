package shared

type SnapshotStateEnum string

const (
	SnapshotStateEnumStateUnspecified SnapshotStateEnum = "STATE_UNSPECIFIED"
	SnapshotStateEnumCreating         SnapshotStateEnum = "CREATING"
	SnapshotStateEnumReady            SnapshotStateEnum = "READY"
	SnapshotStateEnumDeleting         SnapshotStateEnum = "DELETING"
)

// Snapshot
// A Filestore snapshot.
type Snapshot struct {
	CreateTime          *string            `json:"createTime,omitempty"`
	Description         *string            `json:"description,omitempty"`
	FilesystemUsedBytes *string            `json:"filesystemUsedBytes,omitempty"`
	Labels              map[string]string  `json:"labels,omitempty"`
	Name                *string            `json:"name,omitempty"`
	State               *SnapshotStateEnum `json:"state,omitempty"`
}

// SnapshotInput
// A Filestore snapshot.
type SnapshotInput struct {
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
}
