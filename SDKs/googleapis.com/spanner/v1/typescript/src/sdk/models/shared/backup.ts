import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
import { EncryptionInfoInput } from "./encryptioninfo";


export enum BackupDatabaseDialectEnum {
    DatabaseDialectUnspecified = "DATABASE_DIALECT_UNSPECIFIED",
    GoogleStandardSql = "GOOGLE_STANDARD_SQL",
    Postgresql = "POSTGRESQL"
}

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}


// Backup
/** 
 * A backup of a Cloud Spanner database.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseDialect" })
  databaseDialect?: BackupDatabaseDialectEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfo;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=maxExpireTime" })
  maxExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=referencingBackups" })
  referencingBackups?: string[];

  @SpeakeasyMetadata({ data: "json, name=referencingDatabases" })
  referencingDatabases?: string[];

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=versionTime" })
  versionTime?: string;
}


// BackupInput
/** 
 * A backup of a Cloud Spanner database.
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionInfo" })
  encryptionInfo?: EncryptionInfoInput;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=versionTime" })
  versionTime?: string;
}
