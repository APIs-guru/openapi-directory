package shared

type SnapshotStateEnum string

const (
	SnapshotStateEnumStateUnspecified SnapshotStateEnum = "STATE_UNSPECIFIED"
	SnapshotStateEnumCreating         SnapshotStateEnum = "CREATING"
	SnapshotStateEnumReady            SnapshotStateEnum = "READY"
	SnapshotStateEnumDeleting         SnapshotStateEnum = "DELETING"
)

type Snapshot struct {
	CreateTime          *string            `json:"createTime"`
	Description         *string            `json:"description"`
	FilesystemUsedBytes *string            `json:"filesystemUsedBytes"`
	Labels              map[string]string  `json:"labels"`
	Name                *string            `json:"name"`
	State               *SnapshotStateEnum `json:"state"`
}
