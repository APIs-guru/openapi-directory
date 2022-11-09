import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigManagementSyncError } from "./configmanagementsyncerror";

export enum ConfigManagementSyncStateCodeEnum {
    SyncCodeUnspecified = "SYNC_CODE_UNSPECIFIED"
,    Synced = "SYNCED"
,    Pending = "PENDING"
,    Error = "ERROR"
,    NotConfigured = "NOT_CONFIGURED"
,    NotInstalled = "NOT_INSTALLED"
,    Unauthorized = "UNAUTHORIZED"
,    Unreachable = "UNREACHABLE"
}


// ConfigManagementSyncState
/** 
 * State indicating an ACM's progress syncing configurations to a cluster
**/
export class ConfigManagementSyncState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ConfigManagementSyncStateCodeEnum;

  @Metadata({ data: "json, name=errors", elemType: shared.ConfigManagementSyncError })
  errors?: ConfigManagementSyncError[];

  @Metadata({ data: "json, name=importToken" })
  importToken?: string;

  @Metadata({ data: "json, name=lastSync" })
  lastSync?: string;

  @Metadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @Metadata({ data: "json, name=sourceToken" })
  sourceToken?: string;

  @Metadata({ data: "json, name=syncToken" })
  syncToken?: string;
}
