import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreBackupContext
/** 
 * Database instance restore from backup context. Backup context contains source instance id and project id.
**/
export class RestoreBackupContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupRunId" })
  backupRunId?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
