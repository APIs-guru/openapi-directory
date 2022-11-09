import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SqlExternalSyncSettingErrorTypeEnum {
    SqlExternalSyncSettingErrorTypeUnspecified = "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
,    ConnectionFailure = "CONNECTION_FAILURE"
,    BinlogNotEnabled = "BINLOG_NOT_ENABLED"
,    IncompatibleDatabaseVersion = "INCOMPATIBLE_DATABASE_VERSION"
,    ReplicaAlreadySetup = "REPLICA_ALREADY_SETUP"
,    InsufficientPrivilege = "INSUFFICIENT_PRIVILEGE"
,    UnsupportedMigrationType = "UNSUPPORTED_MIGRATION_TYPE"
,    NoPglogicalInstalled = "NO_PGLOGICAL_INSTALLED"
,    PglogicalNodeAlreadyExists = "PGLOGICAL_NODE_ALREADY_EXISTS"
,    InvalidWalLevel = "INVALID_WAL_LEVEL"
,    InvalidSharedPreloadLibrary = "INVALID_SHARED_PRELOAD_LIBRARY"
,    InsufficientMaxReplicationSlots = "INSUFFICIENT_MAX_REPLICATION_SLOTS"
,    InsufficientMaxWalSenders = "INSUFFICIENT_MAX_WAL_SENDERS"
,    InsufficientMaxWorkerProcesses = "INSUFFICIENT_MAX_WORKER_PROCESSES"
,    UnsupportedExtensions = "UNSUPPORTED_EXTENSIONS"
,    InvalidRdsLogicalReplication = "INVALID_RDS_LOGICAL_REPLICATION"
,    InvalidLoggingSetup = "INVALID_LOGGING_SETUP"
,    InvalidDbParam = "INVALID_DB_PARAM"
,    UnsupportedGtidMode = "UNSUPPORTED_GTID_MODE"
,    SqlserverAgentNotRunning = "SQLSERVER_AGENT_NOT_RUNNING"
,    UnsupportedTableDefinition = "UNSUPPORTED_TABLE_DEFINITION"
,    UnsupportedDefiner = "UNSUPPORTED_DEFINER"
,    SqlserverServernameMismatch = "SQLSERVER_SERVERNAME_MISMATCH"
,    PrimaryAlreadySetup = "PRIMARY_ALREADY_SETUP"
,    UnsupportedBinlogFormat = "UNSUPPORTED_BINLOG_FORMAT"
,    BinlogRetentionSetting = "BINLOG_RETENTION_SETTING"
,    UnsupportedStorageEngine = "UNSUPPORTED_STORAGE_ENGINE"
,    LimitedSupportTables = "LIMITED_SUPPORT_TABLES"
}


// SqlExternalSyncSettingError
/** 
 * External primary instance migration setting error/warning.
**/
export class SqlExternalSyncSettingError extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=type" })
  type?: SqlExternalSyncSettingErrorTypeEnum;
}
