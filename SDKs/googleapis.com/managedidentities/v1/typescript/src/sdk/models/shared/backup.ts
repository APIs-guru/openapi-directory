import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}

export enum BackupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    OnDemand = "ON_DEMAND"
,    Scheduled = "SCHEDULED"
}


// Backup
/** 
 * Represents a Managed Microsoft Identities backup.
**/
export class Backup extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=type" })
  type?: BackupTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
