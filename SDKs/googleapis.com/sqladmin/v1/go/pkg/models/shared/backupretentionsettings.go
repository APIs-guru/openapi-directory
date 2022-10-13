package shared

type BackupRetentionSettingsRetentionUnitEnum string

const (
	BackupRetentionSettingsRetentionUnitEnumRetentionUnitUnspecified BackupRetentionSettingsRetentionUnitEnum = "RETENTION_UNIT_UNSPECIFIED"
	BackupRetentionSettingsRetentionUnitEnumCount                    BackupRetentionSettingsRetentionUnitEnum = "COUNT"
)

type BackupRetentionSettings struct {
	RetainedBackups *int32                                    `json:"retainedBackups"`
	RetentionUnit   *BackupRetentionSettingsRetentionUnitEnum `json:"retentionUnit"`
}
