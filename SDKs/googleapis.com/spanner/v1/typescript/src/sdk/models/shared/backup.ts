import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionInfo } from "./encryptioninfo";

export enum BackupDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED"
,    GoogleStandardSql = "GOOGLE_STANDARD_SQL"
,    Postgresql = "POSTGRESQL"
}

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
}


// Backup
/** 
 * A backup of a Cloud Spanner database.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=databaseDialect" })
  databaseDialect?: BackupDatabaseDialectEnum;

  @Metadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=maxExpireTime" })
  maxExpireTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=referencingBackups" })
  referencingBackups?: string[];

  @Metadata({ data: "json, name=referencingDatabases" })
  referencingDatabases?: string[];

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @Metadata({ data: "json, name=versionTime" })
  versionTime?: string;
}
