import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Failed = "FAILED",
    Deleting = "DELETING"
}

export enum BackupTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Scheduled = "SCHEDULED",
    SchemaExtension = "SCHEMA_EXTENSION"
}


// BackupInput
/** 
 * Represents a Managed Microsoft Identities backup.
**/
export class BackupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// Backup
/** 
 * Represents a Managed Microsoft Identities backup.
**/
export class Backup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BackupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
