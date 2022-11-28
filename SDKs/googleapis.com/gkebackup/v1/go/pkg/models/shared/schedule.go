package shared

// Schedule
// Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
type Schedule struct {
	CronSchedule *string `json:"cronSchedule,omitempty"`
	Paused       *bool   `json:"paused,omitempty"`
}
