package shared

type BackupInfo struct {
	Backup      *string `json:"backup"`
	EndTime     *string `json:"endTime"`
	SourceTable *string `json:"sourceTable"`
	StartTime   *string `json:"startTime"`
}
