import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CmekSettingsInput } from "./cmeksettings";
import { IndexConfigInput } from "./indexconfig";
import { CmekSettings } from "./cmeksettings";
import { IndexConfig } from "./indexconfig";


export enum LogBucketLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}


// LogBucketInput
/** 
 * Describes a repository in which log entries are stored.
**/
export class LogBucketInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmekSettings" })
  cmekSettings?: CmekSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=indexConfigs", elemType: IndexConfigInput })
  indexConfigs?: IndexConfigInput[];

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restrictedFields" })
  restrictedFields?: string[];

  @SpeakeasyMetadata({ data: "json, name=retentionDays" })
  retentionDays?: number;
}


// LogBucket
/** 
 * Describes a repository in which log entries are stored.
**/
export class LogBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmekSettings" })
  cmekSettings?: CmekSettings;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=indexConfigs", elemType: IndexConfig })
  indexConfigs?: IndexConfig[];

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: LogBucketLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedFields" })
  restrictedFields?: string[];

  @SpeakeasyMetadata({ data: "json, name=retentionDays" })
  retentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
