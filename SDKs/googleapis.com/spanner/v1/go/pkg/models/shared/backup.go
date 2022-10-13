package shared

type BackupDatabaseDialectEnum string

const (
	BackupDatabaseDialectEnumDatabaseDialectUnspecified BackupDatabaseDialectEnum = "DATABASE_DIALECT_UNSPECIFIED"
	BackupDatabaseDialectEnumGoogleStandardSQL          BackupDatabaseDialectEnum = "GOOGLE_STANDARD_SQL"
	BackupDatabaseDialectEnumPostgresql                 BackupDatabaseDialectEnum = "POSTGRESQL"
)

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumReady            BackupStateEnum = "READY"
)

type Backup struct {
	CreateTime           *string                    `json:"createTime"`
	Database             *string                    `json:"database"`
	DatabaseDialect      *BackupDatabaseDialectEnum `json:"databaseDialect"`
	EncryptionInfo       *EncryptionInfo            `json:"encryptionInfo"`
	ExpireTime           *string                    `json:"expireTime"`
	MaxExpireTime        *string                    `json:"maxExpireTime"`
	Name                 *string                    `json:"name"`
	ReferencingBackups   []string                   `json:"referencingBackups"`
	ReferencingDatabases []string                   `json:"referencingDatabases"`
	SizeBytes            *string                    `json:"sizeBytes"`
	State                *BackupStateEnum           `json:"state"`
	VersionTime          *string                    `json:"versionTime"`
}
