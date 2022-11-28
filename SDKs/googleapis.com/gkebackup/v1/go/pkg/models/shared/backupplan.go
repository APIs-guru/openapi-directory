package shared

// BackupPlanInput
// Defines the configuration and scheduling for a "line" of Backups.
type BackupPlanInput struct {
	BackupConfig    *BackupConfig     `json:"backupConfig,omitempty"`
	BackupSchedule  *Schedule         `json:"backupSchedule,omitempty"`
	Cluster         *string           `json:"cluster,omitempty"`
	Deactivated     *bool             `json:"deactivated,omitempty"`
	Description     *string           `json:"description,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	RetentionPolicy *RetentionPolicy  `json:"retentionPolicy,omitempty"`
}

// BackupPlan
// Defines the configuration and scheduling for a "line" of Backups.
type BackupPlan struct {
	BackupConfig      *BackupConfig     `json:"backupConfig,omitempty"`
	BackupSchedule    *Schedule         `json:"backupSchedule,omitempty"`
	Cluster           *string           `json:"cluster,omitempty"`
	CreateTime        *string           `json:"createTime,omitempty"`
	Deactivated       *bool             `json:"deactivated,omitempty"`
	Description       *string           `json:"description,omitempty"`
	Etag              *string           `json:"etag,omitempty"`
	Labels            map[string]string `json:"labels,omitempty"`
	Name              *string           `json:"name,omitempty"`
	ProtectedPodCount *int32            `json:"protectedPodCount,omitempty"`
	RetentionPolicy   *RetentionPolicy  `json:"retentionPolicy,omitempty"`
	UID               *string           `json:"uid,omitempty"`
	UpdateTime        *string           `json:"updateTime,omitempty"`
}
