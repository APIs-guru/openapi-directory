import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";


export enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}


// SqlInstancesVerifyExternalSyncSettingsRequest
/** 
 * Instance verify external sync settings request.
**/
export class SqlInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlSyncConfig" })
  mysqlSyncConfig?: MySqlSyncConfig;

  @SpeakeasyMetadata({ data: "json, name=syncMode" })
  syncMode?: SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;

  @SpeakeasyMetadata({ data: "json, name=verifyConnectionOnly" })
  verifyConnectionOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifyReplicationOnly" })
  verifyReplicationOnly?: boolean;
}
