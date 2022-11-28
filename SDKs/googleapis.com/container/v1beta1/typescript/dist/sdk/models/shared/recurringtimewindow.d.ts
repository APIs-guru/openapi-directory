import { SpeakeasyBase } from "../../../internal/utils";
import { TimeWindow } from "./timewindow";
/**
 * Represents an arbitrary window of time that recurs.
**/
export declare class RecurringTimeWindow extends SpeakeasyBase {
    recurrence?: string;
    window?: TimeWindow;
}
