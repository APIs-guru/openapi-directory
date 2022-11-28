import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration settings for Cloud Composer maintenance window. The following example: ``` { "startTime":"2019-08-01T01:00:00Z" "endTime":"2019-08-01T07:00:00Z" "recurrence":"FREQ=WEEKLY;BYDAY=TU,WE" } ``` would define a maintenance window between 01 and 07 hours UTC during each Tuesday and Wednesday.
**/
export declare class MaintenanceWindow extends SpeakeasyBase {
    endTime?: string;
    recurrence?: string;
    startTime?: string;
}
