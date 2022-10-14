package shared

type SQLExternalSyncSettingErrorTypeEnum string

const (
	SQLExternalSyncSettingErrorTypeEnumSQLExternalSyncSettingErrorTypeUnspecified SQLExternalSyncSettingErrorTypeEnum = "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
	SQLExternalSyncSettingErrorTypeEnumConnectionFailure                          SQLExternalSyncSettingErrorTypeEnum = "CONNECTION_FAILURE"
	SQLExternalSyncSettingErrorTypeEnumBinlogNotEnabled                           SQLExternalSyncSettingErrorTypeEnum = "BINLOG_NOT_ENABLED"
	SQLExternalSyncSettingErrorTypeEnumIncompatibleDatabaseVersion                SQLExternalSyncSettingErrorTypeEnum = "INCOMPATIBLE_DATABASE_VERSION"
	SQLExternalSyncSettingErrorTypeEnumReplicaAlreadySetup                        SQLExternalSyncSettingErrorTypeEnum = "REPLICA_ALREADY_SETUP"
	SQLExternalSyncSettingErrorTypeEnumInsufficientPrivilege                      SQLExternalSyncSettingErrorTypeEnum = "INSUFFICIENT_PRIVILEGE"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedMigrationType                   SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_MIGRATION_TYPE"
	SQLExternalSyncSettingErrorTypeEnumNoPglogicalInstalled                       SQLExternalSyncSettingErrorTypeEnum = "NO_PGLOGICAL_INSTALLED"
	SQLExternalSyncSettingErrorTypeEnumPglogicalNodeAlreadyExists                 SQLExternalSyncSettingErrorTypeEnum = "PGLOGICAL_NODE_ALREADY_EXISTS"
	SQLExternalSyncSettingErrorTypeEnumInvalidWalLevel                            SQLExternalSyncSettingErrorTypeEnum = "INVALID_WAL_LEVEL"
	SQLExternalSyncSettingErrorTypeEnumInvalidSharedPreloadLibrary                SQLExternalSyncSettingErrorTypeEnum = "INVALID_SHARED_PRELOAD_LIBRARY"
	SQLExternalSyncSettingErrorTypeEnumInsufficientMaxReplicationSlots            SQLExternalSyncSettingErrorTypeEnum = "INSUFFICIENT_MAX_REPLICATION_SLOTS"
	SQLExternalSyncSettingErrorTypeEnumInsufficientMaxWalSenders                  SQLExternalSyncSettingErrorTypeEnum = "INSUFFICIENT_MAX_WAL_SENDERS"
	SQLExternalSyncSettingErrorTypeEnumInsufficientMaxWorkerProcesses             SQLExternalSyncSettingErrorTypeEnum = "INSUFFICIENT_MAX_WORKER_PROCESSES"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedExtensions                      SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_EXTENSIONS"
	SQLExternalSyncSettingErrorTypeEnumInvalidRdsLogicalReplication               SQLExternalSyncSettingErrorTypeEnum = "INVALID_RDS_LOGICAL_REPLICATION"
	SQLExternalSyncSettingErrorTypeEnumInvalidLoggingSetup                        SQLExternalSyncSettingErrorTypeEnum = "INVALID_LOGGING_SETUP"
	SQLExternalSyncSettingErrorTypeEnumInvalidDbParam                             SQLExternalSyncSettingErrorTypeEnum = "INVALID_DB_PARAM"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedGtidMode                        SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_GTID_MODE"
	SQLExternalSyncSettingErrorTypeEnumSqlserverAgentNotRunning                   SQLExternalSyncSettingErrorTypeEnum = "SQLSERVER_AGENT_NOT_RUNNING"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedTableDefinition                 SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_TABLE_DEFINITION"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedDefiner                         SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_DEFINER"
	SQLExternalSyncSettingErrorTypeEnumSqlserverServernameMismatch                SQLExternalSyncSettingErrorTypeEnum = "SQLSERVER_SERVERNAME_MISMATCH"
	SQLExternalSyncSettingErrorTypeEnumPrimaryAlreadySetup                        SQLExternalSyncSettingErrorTypeEnum = "PRIMARY_ALREADY_SETUP"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedBinlogFormat                    SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_BINLOG_FORMAT"
	SQLExternalSyncSettingErrorTypeEnumBinlogRetentionSetting                     SQLExternalSyncSettingErrorTypeEnum = "BINLOG_RETENTION_SETTING"
	SQLExternalSyncSettingErrorTypeEnumUnsupportedStorageEngine                   SQLExternalSyncSettingErrorTypeEnum = "UNSUPPORTED_STORAGE_ENGINE"
	SQLExternalSyncSettingErrorTypeEnumLimitedSupportTables                       SQLExternalSyncSettingErrorTypeEnum = "LIMITED_SUPPORT_TABLES"
)

type SQLExternalSyncSettingError struct {
	Detail *string                              `json:"detail,omitempty"`
	Kind   *string                              `json:"kind,omitempty"`
	Type   *SQLExternalSyncSettingErrorTypeEnum `json:"type,omitempty"`
}
