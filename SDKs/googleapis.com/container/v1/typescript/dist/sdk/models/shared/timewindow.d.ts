import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceExclusionOptions } from "./maintenanceexclusionoptions";
/**
 * Represents an arbitrary window of time.
**/
export declare class TimeWindow extends SpeakeasyBase {
    endTime?: string;
    maintenanceExclusionOptions?: MaintenanceExclusionOptions;
    startTime?: string;
}
