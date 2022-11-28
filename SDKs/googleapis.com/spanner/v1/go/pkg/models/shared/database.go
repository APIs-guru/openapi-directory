package shared

type DatabaseDatabaseDialectEnum string

const (
	DatabaseDatabaseDialectEnumDatabaseDialectUnspecified DatabaseDatabaseDialectEnum = "DATABASE_DIALECT_UNSPECIFIED"
	DatabaseDatabaseDialectEnumGoogleStandardSQL          DatabaseDatabaseDialectEnum = "GOOGLE_STANDARD_SQL"
	DatabaseDatabaseDialectEnumPostgresql                 DatabaseDatabaseDialectEnum = "POSTGRESQL"
)

type DatabaseStateEnum string

const (
	DatabaseStateEnumStateUnspecified DatabaseStateEnum = "STATE_UNSPECIFIED"
	DatabaseStateEnumCreating         DatabaseStateEnum = "CREATING"
	DatabaseStateEnumReady            DatabaseStateEnum = "READY"
	DatabaseStateEnumReadyOptimizing  DatabaseStateEnum = "READY_OPTIMIZING"
)

// Database
// A Cloud Spanner database.
type Database struct {
	CreateTime             *string                      `json:"createTime,omitempty"`
	DatabaseDialect        *DatabaseDatabaseDialectEnum `json:"databaseDialect,omitempty"`
	DefaultLeader          *string                      `json:"defaultLeader,omitempty"`
	EarliestVersionTime    *string                      `json:"earliestVersionTime,omitempty"`
	EncryptionConfig       *EncryptionConfig            `json:"encryptionConfig,omitempty"`
	EncryptionInfo         []EncryptionInfo             `json:"encryptionInfo,omitempty"`
	Name                   *string                      `json:"name,omitempty"`
	RestoreInfo            *RestoreInfo                 `json:"restoreInfo,omitempty"`
	State                  *DatabaseStateEnum           `json:"state,omitempty"`
	VersionRetentionPeriod *string                      `json:"versionRetentionPeriod,omitempty"`
}
