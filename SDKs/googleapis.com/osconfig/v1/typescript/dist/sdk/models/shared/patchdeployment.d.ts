import { SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { OneTimeSchedule } from "./onetimeschedule";
import { PatchConfig } from "./patchconfig";
import { RecurringScheduleInput } from "./recurringschedule";
import { PatchRollout } from "./patchrollout";
import { RecurringSchedule } from "./recurringschedule";
export declare enum PatchDeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Paused = "PAUSED"
}
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
export declare class PatchDeploymentInput extends SpeakeasyBase {
    description?: string;
    duration?: string;
    instanceFilter?: PatchInstanceFilter;
    name?: string;
    oneTimeSchedule?: OneTimeSchedule;
    patchConfig?: PatchConfig;
    recurringSchedule?: RecurringScheduleInput;
    rollout?: PatchRollout;
}
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
export declare class PatchDeployment extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    duration?: string;
    instanceFilter?: PatchInstanceFilter;
    lastExecuteTime?: string;
    name?: string;
    oneTimeSchedule?: OneTimeSchedule;
    patchConfig?: PatchConfig;
    recurringSchedule?: RecurringSchedule;
    rollout?: PatchRollout;
    state?: PatchDeploymentStateEnum;
    updateTime?: string;
}
