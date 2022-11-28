import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackupContext
/** 
 * Backup context.
**/
export class BackupContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupId" })
  backupId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
