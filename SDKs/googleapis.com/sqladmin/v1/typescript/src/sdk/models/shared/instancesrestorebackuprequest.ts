import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RestoreBackupContext } from "./restorebackupcontext";


// InstancesRestoreBackupRequest
/** 
 * Database instance restore backup request.
**/
export class InstancesRestoreBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=restoreBackupContext" })
  restoreBackupContext?: RestoreBackupContext;
}
