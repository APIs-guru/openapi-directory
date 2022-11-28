import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";


export enum RestoreInfoSourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}


// RestoreInfo
/** 
 * Information about the database restore.
**/
export class RestoreInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupInfo" })
  backupInfo?: BackupInfo;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
