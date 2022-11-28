import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";


export enum SqlInstancesStartExternalSyncRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}


// SqlInstancesStartExternalSyncRequest
/** 
 * Instance start external sync request.
**/
export class SqlInstancesStartExternalSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlSyncConfig" })
  mysqlSyncConfig?: MySqlSyncConfig;

  @SpeakeasyMetadata({ data: "json, name=skipVerification" })
  skipVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=syncMode" })
  syncMode?: SqlInstancesStartExternalSyncRequestSyncModeEnum;
}
