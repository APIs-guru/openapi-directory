import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeBackupAgentConfig
/** 
 * Configuration for the Backup for GKE Agent.
**/
export class GkeBackupAgentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
