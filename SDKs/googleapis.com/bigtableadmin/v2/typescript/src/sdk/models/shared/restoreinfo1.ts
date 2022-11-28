import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";
import { RestoreInfoSourceTypeEnum } from "./restoreinfo";



// RestoreInfo1
/** 
 * Information about a table restore.
**/
export class RestoreInfo1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupInfo" })
  backupInfo?: BackupInfo;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: RestoreInfoSourceTypeEnum;
}
