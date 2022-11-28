var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var SqlExternalSyncSettingErrorTypeEnum;
(function (SqlExternalSyncSettingErrorTypeEnum) {
    SqlExternalSyncSettingErrorTypeEnum["SqlExternalSyncSettingErrorTypeUnspecified"] = "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED";
    SqlExternalSyncSettingErrorTypeEnum["ConnectionFailure"] = "CONNECTION_FAILURE";
    SqlExternalSyncSettingErrorTypeEnum["BinlogNotEnabled"] = "BINLOG_NOT_ENABLED";
    SqlExternalSyncSettingErrorTypeEnum["IncompatibleDatabaseVersion"] = "INCOMPATIBLE_DATABASE_VERSION";
    SqlExternalSyncSettingErrorTypeEnum["ReplicaAlreadySetup"] = "REPLICA_ALREADY_SETUP";
    SqlExternalSyncSettingErrorTypeEnum["InsufficientPrivilege"] = "INSUFFICIENT_PRIVILEGE";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedMigrationType"] = "UNSUPPORTED_MIGRATION_TYPE";
    SqlExternalSyncSettingErrorTypeEnum["NoPglogicalInstalled"] = "NO_PGLOGICAL_INSTALLED";
    SqlExternalSyncSettingErrorTypeEnum["PglogicalNodeAlreadyExists"] = "PGLOGICAL_NODE_ALREADY_EXISTS";
    SqlExternalSyncSettingErrorTypeEnum["InvalidWalLevel"] = "INVALID_WAL_LEVEL";
    SqlExternalSyncSettingErrorTypeEnum["InvalidSharedPreloadLibrary"] = "INVALID_SHARED_PRELOAD_LIBRARY";
    SqlExternalSyncSettingErrorTypeEnum["InsufficientMaxReplicationSlots"] = "INSUFFICIENT_MAX_REPLICATION_SLOTS";
    SqlExternalSyncSettingErrorTypeEnum["InsufficientMaxWalSenders"] = "INSUFFICIENT_MAX_WAL_SENDERS";
    SqlExternalSyncSettingErrorTypeEnum["InsufficientMaxWorkerProcesses"] = "INSUFFICIENT_MAX_WORKER_PROCESSES";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedExtensions"] = "UNSUPPORTED_EXTENSIONS";
    SqlExternalSyncSettingErrorTypeEnum["InvalidRdsLogicalReplication"] = "INVALID_RDS_LOGICAL_REPLICATION";
    SqlExternalSyncSettingErrorTypeEnum["InvalidLoggingSetup"] = "INVALID_LOGGING_SETUP";
    SqlExternalSyncSettingErrorTypeEnum["InvalidDbParam"] = "INVALID_DB_PARAM";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedGtidMode"] = "UNSUPPORTED_GTID_MODE";
    SqlExternalSyncSettingErrorTypeEnum["SqlserverAgentNotRunning"] = "SQLSERVER_AGENT_NOT_RUNNING";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedTableDefinition"] = "UNSUPPORTED_TABLE_DEFINITION";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedDefiner"] = "UNSUPPORTED_DEFINER";
    SqlExternalSyncSettingErrorTypeEnum["SqlserverServernameMismatch"] = "SQLSERVER_SERVERNAME_MISMATCH";
    SqlExternalSyncSettingErrorTypeEnum["PrimaryAlreadySetup"] = "PRIMARY_ALREADY_SETUP";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedBinlogFormat"] = "UNSUPPORTED_BINLOG_FORMAT";
    SqlExternalSyncSettingErrorTypeEnum["BinlogRetentionSetting"] = "BINLOG_RETENTION_SETTING";
    SqlExternalSyncSettingErrorTypeEnum["UnsupportedStorageEngine"] = "UNSUPPORTED_STORAGE_ENGINE";
    SqlExternalSyncSettingErrorTypeEnum["LimitedSupportTables"] = "LIMITED_SUPPORT_TABLES";
})(SqlExternalSyncSettingErrorTypeEnum || (SqlExternalSyncSettingErrorTypeEnum = {}));
// SqlExternalSyncSettingError
/**
 * External primary instance migration setting error/warning.
**/
var SqlExternalSyncSettingError = /** @class */ (function (_super) {
    __extends(SqlExternalSyncSettingError, _super);
    function SqlExternalSyncSettingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], SqlExternalSyncSettingError.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SqlExternalSyncSettingError.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SqlExternalSyncSettingError.prototype, "type", void 0);
    return SqlExternalSyncSettingError;
}(SpeakeasyBase));
export { SqlExternalSyncSettingError };
