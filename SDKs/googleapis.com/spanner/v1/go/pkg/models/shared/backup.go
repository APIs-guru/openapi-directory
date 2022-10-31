package shared




type BackupDatabaseDialectEnum string

const (
    BackupDatabaseDialectEnumDatabaseDialectUnspecified BackupDatabaseDialectEnum = "DATABASE_DIALECT_UNSPECIFIED"
BackupDatabaseDialectEnumGoogleStandardSQL BackupDatabaseDialectEnum = "GOOGLE_STANDARD_SQL"
BackupDatabaseDialectEnumPostgresql BackupDatabaseDialectEnum = "POSTGRESQL"
)



type BackupStateEnum string

const (
    BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
BackupStateEnumCreating BackupStateEnum = "CREATING"
BackupStateEnumReady BackupStateEnum = "READY"
)


type Backup struct {
    CreateTime *string `json:"createTime,omitempty"`
    Database *string `json:"database,omitempty"`
    DatabaseDialect *BackupDatabaseDialectEnum `json:"databaseDialect,omitempty"`
    EncryptionInfo *EncryptionInfo `json:"encryptionInfo,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    MaxExpireTime *string `json:"maxExpireTime,omitempty"`
    Name *string `json:"name,omitempty"`
    ReferencingBackups []string `json:"referencingBackups,omitempty"`
    ReferencingDatabases []string `json:"referencingDatabases,omitempty"`
    SizeBytes *string `json:"sizeBytes,omitempty"`
    State *BackupStateEnum `json:"state,omitempty"`
    VersionTime *string `json:"versionTime,omitempty"`
    
}

