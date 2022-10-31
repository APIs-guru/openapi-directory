package shared

type ListBackupPlansResponse struct {
	BackupPlans   []BackupPlan `json:"backupPlans,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
