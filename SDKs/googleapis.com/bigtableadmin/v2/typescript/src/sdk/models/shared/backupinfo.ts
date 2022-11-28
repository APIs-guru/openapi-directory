import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackupInfo
/** 
 * Information about a backup.
**/
export class BackupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceTable" })
  sourceTable?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
