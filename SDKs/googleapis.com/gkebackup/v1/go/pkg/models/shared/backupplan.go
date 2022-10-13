package shared

type BackupPlan struct {
	BackupConfig      *BackupConfig     `json:"backupConfig"`
	BackupSchedule    *Schedule         `json:"backupSchedule"`
	Cluster           *string           `json:"cluster"`
	CreateTime        *string           `json:"createTime"`
	Deactivated       *bool             `json:"deactivated"`
	Description       *string           `json:"description"`
	Etag              *string           `json:"etag"`
	Labels            map[string]string `json:"labels"`
	Name              *string           `json:"name"`
	ProtectedPodCount *int32            `json:"protectedPodCount"`
	RetentionPolicy   *RetentionPolicy  `json:"retentionPolicy"`
	UID               *string           `json:"uid"`
	UpdateTime        *string           `json:"updateTime"`
}
