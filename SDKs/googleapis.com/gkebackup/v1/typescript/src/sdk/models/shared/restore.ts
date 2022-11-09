import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RestoreConfig } from "./restoreconfig";

export enum RestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}


// Restore
/** 
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
export class Restore extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourcesExcludedCount" })
  resourcesExcludedCount?: number;

  @Metadata({ data: "json, name=resourcesFailedCount" })
  resourcesFailedCount?: number;

  @Metadata({ data: "json, name=resourcesRestoredCount" })
  resourcesRestoredCount?: number;

  @Metadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;

  @Metadata({ data: "json, name=state" })
  state?: RestoreStateEnum;

  @Metadata({ data: "json, name=stateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumesRestoredCount" })
  volumesRestoredCount?: number;
}
