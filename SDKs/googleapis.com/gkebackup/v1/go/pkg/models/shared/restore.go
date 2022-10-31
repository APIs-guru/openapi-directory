package shared

type RestoreStateEnum string

const (
	RestoreStateEnumStateUnspecified RestoreStateEnum = "STATE_UNSPECIFIED"
	RestoreStateEnumCreating         RestoreStateEnum = "CREATING"
	RestoreStateEnumInProgress       RestoreStateEnum = "IN_PROGRESS"
	RestoreStateEnumSucceeded        RestoreStateEnum = "SUCCEEDED"
	RestoreStateEnumFailed           RestoreStateEnum = "FAILED"
	RestoreStateEnumDeleting         RestoreStateEnum = "DELETING"
)

type Restore struct {
	Backup                 *string           `json:"backup,omitempty"`
	Cluster                *string           `json:"cluster,omitempty"`
	CompleteTime           *string           `json:"completeTime,omitempty"`
	CreateTime             *string           `json:"createTime,omitempty"`
	Description            *string           `json:"description,omitempty"`
	Etag                   *string           `json:"etag,omitempty"`
	Labels                 map[string]string `json:"labels,omitempty"`
	Name                   *string           `json:"name,omitempty"`
	ResourcesExcludedCount *int32            `json:"resourcesExcludedCount,omitempty"`
	ResourcesFailedCount   *int32            `json:"resourcesFailedCount,omitempty"`
	ResourcesRestoredCount *int32            `json:"resourcesRestoredCount,omitempty"`
	RestoreConfig          *RestoreConfig    `json:"restoreConfig,omitempty"`
	State                  *RestoreStateEnum `json:"state,omitempty"`
	StateReason            *string           `json:"stateReason,omitempty"`
	UID                    *string           `json:"uid,omitempty"`
	UpdateTime             *string           `json:"updateTime,omitempty"`
	VolumesRestoredCount   *int32            `json:"volumesRestoredCount,omitempty"`
}
