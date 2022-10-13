package shared

type RestorePlan struct {
	BackupPlan    *string           `json:"backupPlan"`
	Cluster       *string           `json:"cluster"`
	CreateTime    *string           `json:"createTime"`
	Description   *string           `json:"description"`
	Etag          *string           `json:"etag"`
	Labels        map[string]string `json:"labels"`
	Name          *string           `json:"name"`
	RestoreConfig *RestoreConfig    `json:"restoreConfig"`
	UID           *string           `json:"uid"`
	UpdateTime    *string           `json:"updateTime"`
}
