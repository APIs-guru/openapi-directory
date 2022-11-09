import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupInfo } from "./backupinfo";

export enum RestoreInfoSourceTypeEnum {
    RestoreSourceTypeUnspecified = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
,    Backup = "BACKUP"
}


// RestoreInfo
/** 
 * Information about a table restore.
**/
export class RestoreInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupInfo" })
  backupInfo?: BackupInfo;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
