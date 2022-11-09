import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";

export enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
,    Online = "ONLINE"
,    Offline = "OFFLINE"
}


export class SqlInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlSyncConfig" })
  mysqlSyncConfig?: MySqlSyncConfig;

  @Metadata({ data: "json, name=syncMode" })
  syncMode?: SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;

  @Metadata({ data: "json, name=verifyConnectionOnly" })
  verifyConnectionOnly?: boolean;

  @Metadata({ data: "json, name=verifyReplicationOnly" })
  verifyReplicationOnly?: boolean;
}
