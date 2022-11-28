import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";
export declare enum SqlInstancesStartExternalSyncRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}
/**
 * Instance start external sync request.
**/
export declare class SqlInstancesStartExternalSyncRequest extends SpeakeasyBase {
    mysqlSyncConfig?: MySqlSyncConfig;
    skipVerification?: boolean;
    syncMode?: SqlInstancesStartExternalSyncRequestSyncModeEnum;
}
