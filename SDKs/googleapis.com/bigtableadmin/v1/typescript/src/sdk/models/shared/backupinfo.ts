import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackupInfo
/** 
 * Information about a backup.
**/
export class BackupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=sourceTable" })
  sourceTable?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
