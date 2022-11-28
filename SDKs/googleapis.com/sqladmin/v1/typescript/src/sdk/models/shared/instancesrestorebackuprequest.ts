import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestoreBackupContext } from "./restorebackupcontext";



// InstancesRestoreBackupRequest
/** 
 * Database instance restore backup request.
**/
export class InstancesRestoreBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restoreBackupContext" })
  restoreBackupContext?: RestoreBackupContext;
}
