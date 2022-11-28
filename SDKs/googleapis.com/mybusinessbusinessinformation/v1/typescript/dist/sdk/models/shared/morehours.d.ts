import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
/**
 * The time periods during which a location is open for certain types of business.
**/
export declare class MoreHours extends SpeakeasyBase {
    hoursTypeId?: string;
    periods?: TimePeriod[];
}
