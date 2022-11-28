import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}

export enum RestoreTypeEnum {
    RestoreTypeUnspecified = "RESTORE_TYPE_UNSPECIFIED",
    Full = "FULL",
    MetadataOnly = "METADATA_ONLY"
}


// Restore
/** 
 * The details of a metadata restore operation.
**/
export class Restore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RestoreStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RestoreTypeEnum;
}
