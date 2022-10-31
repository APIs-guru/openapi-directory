package shared



type RestorePlan struct {
    BackupPlan *string `json:"backupPlan,omitempty"`
    Cluster *string `json:"cluster,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    RestoreConfig *RestoreConfig `json:"restoreConfig,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

