package shared

// RestorePlan
// The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
type RestorePlan struct {
	BackupPlan    *string           `json:"backupPlan,omitempty"`
	Cluster       *string           `json:"cluster,omitempty"`
	CreateTime    *string           `json:"createTime,omitempty"`
	Description   *string           `json:"description,omitempty"`
	Etag          *string           `json:"etag,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	Name          *string           `json:"name,omitempty"`
	RestoreConfig *RestoreConfig    `json:"restoreConfig,omitempty"`
	UID           *string           `json:"uid,omitempty"`
	UpdateTime    *string           `json:"updateTime,omitempty"`
}

// RestorePlanInput
// The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
type RestorePlanInput struct {
	BackupPlan    *string           `json:"backupPlan,omitempty"`
	Cluster       *string           `json:"cluster,omitempty"`
	Description   *string           `json:"description,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	RestoreConfig *RestoreConfig    `json:"restoreConfig,omitempty"`
}
