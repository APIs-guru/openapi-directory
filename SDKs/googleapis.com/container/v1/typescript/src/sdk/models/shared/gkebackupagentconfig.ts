import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeBackupAgentConfig
/** 
 * Configuration for the Backup for GKE Agent.
**/
export class GkeBackupAgentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
