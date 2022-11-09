import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { OneTimeSchedule } from "./onetimeschedule";
import { PatchConfig } from "./patchconfig";
import { RecurringSchedule } from "./recurringschedule";
import { PatchRollout } from "./patchrollout";

export enum PatchDeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Paused = "PAUSED"
}


// PatchDeployment
/** 
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
export class PatchDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=instanceFilter" })
  instanceFilter?: PatchInstanceFilter;

  @Metadata({ data: "json, name=lastExecuteTime" })
  lastExecuteTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oneTimeSchedule" })
  oneTimeSchedule?: OneTimeSchedule;

  @Metadata({ data: "json, name=patchConfig" })
  patchConfig?: PatchConfig;

  @Metadata({ data: "json, name=recurringSchedule" })
  recurringSchedule?: RecurringSchedule;

  @Metadata({ data: "json, name=rollout" })
  rollout?: PatchRollout;

  @Metadata({ data: "json, name=state" })
  state?: PatchDeploymentStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
