import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionConfig } from "./encryptionconfig";
import { EncryptionInfo } from "./encryptioninfo";
import { RestoreInfo } from "./restoreinfo";

export enum DatabaseDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED"
,    GoogleStandardSql = "GOOGLE_STANDARD_SQL"
,    Postgresql = "POSTGRESQL"
}

export enum DatabaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    ReadyOptimizing = "READY_OPTIMIZING"
}


// Database
/** 
 * A Cloud Spanner database.
**/
export class Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=databaseDialect" })
  databaseDialect?: DatabaseDatabaseDialectEnum;

  @Metadata({ data: "json, name=defaultLeader" })
  defaultLeader?: string;

  @Metadata({ data: "json, name=earliestVersionTime" })
  earliestVersionTime?: string;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=encryptionInfo", elemType: shared.EncryptionInfo })
  encryptionInfo?: EncryptionInfo[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restoreInfo" })
  restoreInfo?: RestoreInfo;

  @Metadata({ data: "json, name=state" })
  state?: DatabaseStateEnum;

  @Metadata({ data: "json, name=versionRetentionPeriod" })
  versionRetentionPeriod?: string;
}
