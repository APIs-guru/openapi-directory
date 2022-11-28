import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { EncryptionInfo } from "./encryptioninfo";
import { RestoreInfo } from "./restoreinfo";


export enum DatabaseDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}

export enum DatabaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    ReadyOptimizing = "READY_OPTIMIZING"
}


// Database
/** 
 * A Cloud Spanner database.
**/
export class Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseDialect" })
  databaseDialect?: DatabaseDatabaseDialectEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultLeader" })
  defaultLeader?: string;

  @SpeakeasyMetadata({ data: "json, name=earliestVersionTime" })
  earliestVersionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo", elemType: EncryptionInfo })
  encryptionInfo?: EncryptionInfo[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreInfo" })
  restoreInfo?: RestoreInfo;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DatabaseStateEnum;

  @SpeakeasyMetadata({ data: "json, name=versionRetentionPeriod" })
  versionRetentionPeriod?: string;
}
