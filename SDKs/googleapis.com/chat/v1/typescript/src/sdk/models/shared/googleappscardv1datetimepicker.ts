import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";


export enum GoogleAppsCardV1DateTimePickerTypeEnum {
    DateAndTime = "DATE_AND_TIME",
    DateOnly = "DATE_ONLY",
    TimeOnly = "TIME_ONLY"
}


// GoogleAppsCardV1DateTimePicker
/** 
 * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
**/
export class GoogleAppsCardV1DateTimePicker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=timezoneOffsetDate" })
  timezoneOffsetDate?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1DateTimePickerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=valueMsEpoch" })
  valueMsEpoch?: string;
}
