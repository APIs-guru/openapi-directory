import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}

export enum RestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED"
,    Full = "FULL"
,    MetadataOnly = "METADATA_ONLY"
}


// Restore
/** 
 * The details of a metadata restore operation.
**/
export class Restore extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: RestoreStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: RestoreTypeEnum;
}
