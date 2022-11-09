import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupInfo } from "./backupinfo";

export enum RestoreInfoSourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Backup = "BACKUP"
}


// RestoreInfo
/** 
 * Information about the database restore.
**/
export class RestoreInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupInfo" })
  backupInfo?: BackupInfo;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
