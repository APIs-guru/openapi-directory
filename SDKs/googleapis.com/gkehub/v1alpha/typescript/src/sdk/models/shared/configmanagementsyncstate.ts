import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementSyncError } from "./configmanagementsyncerror";


export enum ConfigManagementSyncStateCodeEnum {
    SyncCodeUnspecified = "SYNC_CODE_UNSPECIFIED",
    Synced = "SYNCED",
    Pending = "PENDING",
    Error = "ERROR",
    NotConfigured = "NOT_CONFIGURED",
    NotInstalled = "NOT_INSTALLED",
    Unauthorized = "UNAUTHORIZED",
    Unreachable = "UNREACHABLE"
}


// ConfigManagementSyncState
/** 
 * State indicating an ACM's progress syncing configurations to a cluster
**/
export class ConfigManagementSyncState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ConfigManagementSyncStateCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ConfigManagementSyncError })
  errors?: ConfigManagementSyncError[];

  @SpeakeasyMetadata({ data: "json, name=importToken" })
  importToken?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceToken" })
  sourceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=syncToken" })
  syncToken?: string;
}
