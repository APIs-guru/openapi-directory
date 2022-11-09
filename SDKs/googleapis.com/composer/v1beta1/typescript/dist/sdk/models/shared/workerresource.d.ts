import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration for resources used by Airflow workers.
**/
export declare class WorkerResource extends SpeakeasyBase {
    cpu?: number;
    maxCount?: number;
    memoryGb?: number;
    minCount?: number;
    storageGb?: number;
}
