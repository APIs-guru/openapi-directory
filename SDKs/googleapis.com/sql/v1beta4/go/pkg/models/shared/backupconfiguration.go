package shared

type BackupConfiguration struct {
	BackupRetentionSettings        *BackupRetentionSettings `json:"backupRetentionSettings,omitempty"`
	BinaryLogEnabled               *bool                    `json:"binaryLogEnabled,omitempty"`
	Enabled                        *bool                    `json:"enabled,omitempty"`
	Kind                           *string                  `json:"kind,omitempty"`
	Location                       *string                  `json:"location,omitempty"`
	PointInTimeRecoveryEnabled     *bool                    `json:"pointInTimeRecoveryEnabled,omitempty"`
	ReplicationLogArchivingEnabled *bool                    `json:"replicationLogArchivingEnabled,omitempty"`
	StartTime                      *string                  `json:"startTime,omitempty"`
	TransactionLogRetentionDays    *int32                   `json:"transactionLogRetentionDays,omitempty"`
}
