import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";


export enum RestoreInfoSourceTypeEnum {
    RestoreSourceTypeUnspecified = "RESTORE_SOURCE_TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}


// RestoreInfo
/** 
 * Information about a table restore.
**/
export class RestoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupInfo" })
  backupInfo?: BackupInfo;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
