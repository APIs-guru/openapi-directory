import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackupContext
/** 
 * Backup context.
**/
export class BackupContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupId" })
  backupId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
