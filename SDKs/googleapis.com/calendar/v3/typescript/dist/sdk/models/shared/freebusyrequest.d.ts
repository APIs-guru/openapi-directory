import { SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyRequestItem } from "./freebusyrequestitem";
export declare class FreeBusyRequest extends SpeakeasyBase {
    calendarExpansionMax?: number;
    groupExpansionMax?: number;
    items?: FreeBusyRequestItem[];
    timeMax?: Date;
    timeMin?: Date;
    timeZone?: string;
}
