import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CmekSettings } from "./cmeksettings";
import { IndexConfig } from "./indexconfig";

export enum LogBucketLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    DeleteRequested = "DELETE_REQUESTED"
}


// LogBucket
/** 
 * Describes a repository in which log entries are stored.
**/
export class LogBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmekSettings" })
  cmekSettings?: CmekSettings;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=indexConfigs", elemType: shared.IndexConfig })
  indexConfigs?: IndexConfig[];

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: LogBucketLifecycleStateEnum;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restrictedFields" })
  restrictedFields?: string[];

  @Metadata({ data: "json, name=retentionDays" })
  retentionDays?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
