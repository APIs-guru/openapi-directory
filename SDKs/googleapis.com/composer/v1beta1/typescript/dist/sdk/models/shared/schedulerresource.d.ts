import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for resources used by Airflow schedulers.
**/
export declare class SchedulerResource extends SpeakeasyBase {
    count?: number;
    cpu?: number;
    memoryGb?: number;
    storageGb?: number;
}
