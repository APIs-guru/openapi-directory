import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export declare enum GoogleAppsCardV1DateTimePickerTypeEnum {
    DateAndTime = "DATE_AND_TIME",
    DateOnly = "DATE_ONLY",
    TimeOnly = "TIME_ONLY"
}
/**
 * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
**/
export declare class GoogleAppsCardV1DateTimePicker extends SpeakeasyBase {
    label?: string;
    name?: string;
    onChangeAction?: GoogleAppsCardV1Action;
    timezoneOffsetDate?: number;
    type?: GoogleAppsCardV1DateTimePickerTypeEnum;
    valueMsEpoch?: string;
}
