import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
import { Error } from "./error";
export declare class FreeBusyCalendar extends SpeakeasyBase {
    busy?: TimePeriod[];
    errors?: Error[];
}
