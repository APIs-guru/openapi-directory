package shared

type ListBackupPlansResponse struct {
	BackupPlans   []BackupPlan `json:"backupPlans"`
	NextPageToken *string      `json:"nextPageToken"`
	Unreachable   []string     `json:"unreachable"`
}
