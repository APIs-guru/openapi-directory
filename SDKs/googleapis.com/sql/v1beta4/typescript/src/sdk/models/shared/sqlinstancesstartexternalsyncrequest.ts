import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";

export enum SqlInstancesStartExternalSyncRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
,    Online = "ONLINE"
,    Offline = "OFFLINE"
}


export class SqlInstancesStartExternalSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlSyncConfig" })
  mysqlSyncConfig?: MySqlSyncConfig;

  @Metadata({ data: "json, name=skipVerification" })
  skipVerification?: boolean;

  @Metadata({ data: "json, name=syncMode" })
  syncMode?: SqlInstancesStartExternalSyncRequestSyncModeEnum;
}
