import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreBackupContext
/** 
 * Database instance restore from backup context. Backup context contains source instance id and project id.
**/
export class RestoreBackupContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupRunId" })
  backupRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
