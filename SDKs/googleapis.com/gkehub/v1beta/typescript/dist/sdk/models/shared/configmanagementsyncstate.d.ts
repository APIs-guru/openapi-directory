import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementSyncError } from "./configmanagementsyncerror";
export declare enum ConfigManagementSyncStateCodeEnum {
    SyncCodeUnspecified = "SYNC_CODE_UNSPECIFIED",
    Synced = "SYNCED",
    Pending = "PENDING",
    Error = "ERROR",
    NotConfigured = "NOT_CONFIGURED",
    NotInstalled = "NOT_INSTALLED",
    Unauthorized = "UNAUTHORIZED",
    Unreachable = "UNREACHABLE"
}
/**
 * State indicating an ACM's progress syncing configurations to a cluster
**/
export declare class ConfigManagementSyncState extends SpeakeasyBase {
    code?: ConfigManagementSyncStateCodeEnum;
    errors?: ConfigManagementSyncError[];
    importToken?: string;
    lastSync?: string;
    lastSyncTime?: string;
    sourceToken?: string;
    syncToken?: string;
}
