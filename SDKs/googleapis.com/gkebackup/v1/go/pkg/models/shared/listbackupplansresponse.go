package shared

// ListBackupPlansResponse
// Response message for ListBackupPlans.
type ListBackupPlansResponse struct {
	BackupPlans   []BackupPlan `json:"backupPlans,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
