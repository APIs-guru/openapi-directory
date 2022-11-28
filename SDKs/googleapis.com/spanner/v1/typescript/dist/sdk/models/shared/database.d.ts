import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { EncryptionInfo } from "./encryptioninfo";
import { RestoreInfo } from "./restoreinfo";
export declare enum DatabaseDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}
export declare enum DatabaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    ReadyOptimizing = "READY_OPTIMIZING"
}
/**
 * A Cloud Spanner database.
**/
export declare class Database extends SpeakeasyBase {
    createTime?: string;
    databaseDialect?: DatabaseDatabaseDialectEnum;
    defaultLeader?: string;
    earliestVersionTime?: string;
    encryptionConfig?: EncryptionConfig;
    encryptionInfo?: EncryptionInfo[];
    name?: string;
    restoreInfo?: RestoreInfo;
    state?: DatabaseStateEnum;
    versionRetentionPeriod?: string;
}
