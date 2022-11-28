import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Any scheduled maintenance for this instance.
**/
export declare class SqlScheduledMaintenance extends SpeakeasyBase {
    canDefer?: boolean;
    canReschedule?: boolean;
    scheduleDeadlineTime?: string;
    startTime?: string;
}
