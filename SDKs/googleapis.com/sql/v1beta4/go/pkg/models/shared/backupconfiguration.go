package shared

type BackupConfiguration struct {
	BackupRetentionSettings        *BackupRetentionSettings `json:"backupRetentionSettings"`
	BinaryLogEnabled               *bool                    `json:"binaryLogEnabled"`
	Enabled                        *bool                    `json:"enabled"`
	Kind                           *string                  `json:"kind"`
	Location                       *string                  `json:"location"`
	PointInTimeRecoveryEnabled     *bool                    `json:"pointInTimeRecoveryEnabled"`
	ReplicationLogArchivingEnabled *bool                    `json:"replicationLogArchivingEnabled"`
	StartTime                      *string                  `json:"startTime"`
	TransactionLogRetentionDays    *int32                   `json:"transactionLogRetentionDays"`
}
