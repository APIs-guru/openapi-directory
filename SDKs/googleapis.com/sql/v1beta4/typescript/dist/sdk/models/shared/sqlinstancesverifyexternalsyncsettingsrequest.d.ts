import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";
export declare enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}
export declare class SqlInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
    mysqlSyncConfig?: MySqlSyncConfig;
    syncMode?: SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
    verifyConnectionOnly?: boolean;
    verifyReplicationOnly?: boolean;
}
