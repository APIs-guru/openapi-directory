import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";
export declare enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}
/**
 * Instance verify external sync settings request.
**/
export declare class SqlInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
    mysqlSyncConfig?: MySqlSyncConfig;
    syncMode?: SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
    verifyConnectionOnly?: boolean;
    verifyReplicationOnly?: boolean;
}
