package shared

// IngestionInfo
// Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
type IngestionInfo struct {
	BackupIngestionAddress      *string `json:"backupIngestionAddress,omitempty"`
	IngestionAddress            *string `json:"ingestionAddress,omitempty"`
	RtmpsBackupIngestionAddress *string `json:"rtmpsBackupIngestionAddress,omitempty"`
	RtmpsIngestionAddress       *string `json:"rtmpsIngestionAddress,omitempty"`
	StreamName                  *string `json:"streamName,omitempty"`
}
