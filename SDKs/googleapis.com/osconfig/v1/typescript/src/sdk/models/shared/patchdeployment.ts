import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { OneTimeSchedule } from "./onetimeschedule";
import { PatchConfig } from "./patchconfig";
import { RecurringScheduleInput } from "./recurringschedule";
import { PatchRollout } from "./patchrollout";
import { RecurringSchedule } from "./recurringschedule";


export enum PatchDeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Paused = "PAUSED"
}


// PatchDeploymentInput
/** 
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
export class PatchDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oneTimeSchedule" })
  oneTimeSchedule?: OneTimeSchedule;

  @SpeakeasyMetadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @SpeakeasyMetadata({ data: "json, name=recurringSchedule" })
  recurringSchedule?: RecurringScheduleInput;

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;
}


// PatchDeployment
/** 
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
export class PatchDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @SpeakeasyMetadata({ data: "json, name=lastExecuteTime" })
  lastExecuteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oneTimeSchedule" })
  oneTimeSchedule?: OneTimeSchedule;

  @SpeakeasyMetadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @SpeakeasyMetadata({ data: "json, name=recurringSchedule" })
  recurringSchedule?: RecurringSchedule;

  @SpeakeasyMetadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PatchDeploymentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
