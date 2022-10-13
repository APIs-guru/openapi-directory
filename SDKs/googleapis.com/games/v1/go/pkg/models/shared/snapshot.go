package shared

type SnapshotTypeEnum string

const (
	SnapshotTypeEnumSnapshotTypeUnspecified SnapshotTypeEnum = "SNAPSHOT_TYPE_UNSPECIFIED"
	SnapshotTypeEnumSaveGame                SnapshotTypeEnum = "SAVE_GAME"
)

type Snapshot struct {
	CoverImage         *SnapshotImage    `json:"coverImage"`
	Description        *string           `json:"description"`
	DriveID            *string           `json:"driveId"`
	DurationMillis     *string           `json:"durationMillis"`
	ID                 *string           `json:"id"`
	Kind               *string           `json:"kind"`
	LastModifiedMillis *string           `json:"lastModifiedMillis"`
	ProgressValue      *string           `json:"progressValue"`
	Title              *string           `json:"title"`
	Type               *SnapshotTypeEnum `json:"type"`
	UniqueName         *string           `json:"uniqueName"`
}
