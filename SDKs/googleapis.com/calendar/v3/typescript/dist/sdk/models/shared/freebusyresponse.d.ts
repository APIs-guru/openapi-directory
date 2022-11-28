import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyCalendar } from "./freebusycalendar";
import { FreeBusyGroup } from "./freebusygroup";
export declare class FreeBusyResponse extends SpeakeasyBase {
    calendars?: Map<string, FreeBusyCalendar>;
    groups?: Map<string, FreeBusyGroup>;
    kind?: string;
    timeMax?: Date;
    timeMin?: Date;
}
