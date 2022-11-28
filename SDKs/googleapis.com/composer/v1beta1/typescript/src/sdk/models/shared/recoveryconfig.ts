import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSnapshotsConfig } from "./scheduledsnapshotsconfig";



// RecoveryConfig
/** 
 * The Recovery settings of an environment.
**/
export class RecoveryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledSnapshotsConfig" })
  scheduledSnapshotsConfig?: ScheduledSnapshotsConfig;
}
