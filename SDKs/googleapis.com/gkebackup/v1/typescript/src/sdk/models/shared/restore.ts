import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";


export enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}


// RestoreInput
/** 
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
export class RestoreInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;
}


// Restore
/** 
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
export class Restore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesExcludedCount" })
  resourcesExcludedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=resourcesFailedCount" })
  resourcesFailedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=resourcesRestoredCount" })
  resourcesRestoredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RestoreStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumesRestoredCount" })
  volumesRestoredCount?: number;
}
