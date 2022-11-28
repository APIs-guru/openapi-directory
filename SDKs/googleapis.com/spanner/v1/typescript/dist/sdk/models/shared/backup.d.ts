import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
import { EncryptionInfoInput } from "./encryptioninfo";
export declare enum BackupDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}
/**
 * A backup of a Cloud Spanner database.
**/
export declare class Backup extends SpeakeasyBase {
    createTime?: string;
    database?: string;
    databaseDialect?: BackupDatabaseDialectEnum;
    encryptionInfo?: EncryptionInfo;
    expireTime?: string;
    maxExpireTime?: string;
    name?: string;
    referencingBackups?: string[];
    referencingDatabases?: string[];
    sizeBytes?: string;
    state?: BackupStateEnum;
    versionTime?: string;
}
/**
 * A backup of a Cloud Spanner database.
**/
export declare class BackupInput extends SpeakeasyBase {
    database?: string;
    encryptionInfo?: EncryptionInfoInput;
    expireTime?: string;
    name?: string;
    versionTime?: string;
}
