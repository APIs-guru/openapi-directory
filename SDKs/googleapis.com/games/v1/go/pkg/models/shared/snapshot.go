package shared

type SnapshotTypeEnum string

const (
	SnapshotTypeEnumSnapshotTypeUnspecified SnapshotTypeEnum = "SNAPSHOT_TYPE_UNSPECIFIED"
	SnapshotTypeEnumSaveGame                SnapshotTypeEnum = "SAVE_GAME"
)

// Snapshot
// An snapshot object.
type Snapshot struct {
	CoverImage         *SnapshotImage    `json:"coverImage,omitempty"`
	Description        *string           `json:"description,omitempty"`
	DriveID            *string           `json:"driveId,omitempty"`
	DurationMillis     *string           `json:"durationMillis,omitempty"`
	ID                 *string           `json:"id,omitempty"`
	Kind               *string           `json:"kind,omitempty"`
	LastModifiedMillis *string           `json:"lastModifiedMillis,omitempty"`
	ProgressValue      *string           `json:"progressValue,omitempty"`
	Title              *string           `json:"title,omitempty"`
	Type               *SnapshotTypeEnum `json:"type,omitempty"`
	UniqueName         *string           `json:"uniqueName,omitempty"`
}
