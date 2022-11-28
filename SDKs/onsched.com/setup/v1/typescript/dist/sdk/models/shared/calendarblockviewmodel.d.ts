import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
export declare class CalendarBlockViewModel extends SpeakeasyBase {
    calendarId?: string;
    endDate?: Date;
    endTime?: number;
    id?: string;
    locationId?: string;
    objectName?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    startDate?: Date;
    startTime?: number;
}
