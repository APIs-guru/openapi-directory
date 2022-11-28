package shared

type BackupRetentionSettingsRetentionUnitEnum string

const (
	BackupRetentionSettingsRetentionUnitEnumRetentionUnitUnspecified BackupRetentionSettingsRetentionUnitEnum = "RETENTION_UNIT_UNSPECIFIED"
	BackupRetentionSettingsRetentionUnitEnumCount                    BackupRetentionSettingsRetentionUnitEnum = "COUNT"
)

// BackupRetentionSettings
// We currently only support backup retention by specifying the number of backups we will retain.
type BackupRetentionSettings struct {
	RetainedBackups *int32                                    `json:"retainedBackups,omitempty"`
	RetentionUnit   *BackupRetentionSettingsRetentionUnitEnum `json:"retentionUnit,omitempty"`
}
