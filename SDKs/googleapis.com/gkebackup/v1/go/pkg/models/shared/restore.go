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
	Backup                 *string           `json:"backup"`
	Cluster                *string           `json:"cluster"`
	CompleteTime           *string           `json:"completeTime"`
	CreateTime             *string           `json:"createTime"`
	Description            *string           `json:"description"`
	Etag                   *string           `json:"etag"`
	Labels                 map[string]string `json:"labels"`
	Name                   *string           `json:"name"`
	ResourcesExcludedCount *int32            `json:"resourcesExcludedCount"`
	ResourcesFailedCount   *int32            `json:"resourcesFailedCount"`
	ResourcesRestoredCount *int32            `json:"resourcesRestoredCount"`
	RestoreConfig          *RestoreConfig    `json:"restoreConfig"`
	State                  *RestoreStateEnum `json:"state"`
	StateReason            *string           `json:"stateReason"`
	UID                    *string           `json:"uid"`
	UpdateTime             *string           `json:"updateTime"`
	VolumesRestoredCount   *int32            `json:"volumesRestoredCount"`
}
