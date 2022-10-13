package shared

type IngestionInfo struct {
	BackupIngestionAddress      *string `json:"backupIngestionAddress"`
	IngestionAddress            *string `json:"ingestionAddress"`
	RtmpsBackupIngestionAddress *string `json:"rtmpsBackupIngestionAddress"`
	RtmpsIngestionAddress       *string `json:"rtmpsIngestionAddress"`
	StreamName                  *string `json:"streamName"`
}
