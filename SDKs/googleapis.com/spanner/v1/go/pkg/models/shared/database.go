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

type Database struct {
	CreateTime             *string                      `json:"createTime"`
	DatabaseDialect        *DatabaseDatabaseDialectEnum `json:"databaseDialect"`
	DefaultLeader          *string                      `json:"defaultLeader"`
	EarliestVersionTime    *string                      `json:"earliestVersionTime"`
	EncryptionConfig       *EncryptionConfig            `json:"encryptionConfig"`
	EncryptionInfo         []EncryptionInfo             `json:"encryptionInfo"`
	Name                   *string                      `json:"name"`
	RestoreInfo            *RestoreInfo                 `json:"restoreInfo"`
	State                  *DatabaseStateEnum           `json:"state"`
	VersionRetentionPeriod *string                      `json:"versionRetentionPeriod"`
}
