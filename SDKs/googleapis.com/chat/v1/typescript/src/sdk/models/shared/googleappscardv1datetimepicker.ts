import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";

export enum GoogleAppsCardV1DateTimePickerTypeEnum {
    DateAndTime = "DATE_AND_TIME"
,    DateOnly = "DATE_ONLY"
,    TimeOnly = "TIME_ONLY"
}


// GoogleAppsCardV1DateTimePicker
/** 
 * The widget that lets users to specify a date and time. Not supported by Google Chat apps.
**/
export class GoogleAppsCardV1DateTimePicker extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=timezoneOffsetDate" })
  timezoneOffsetDate?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1DateTimePickerTypeEnum;

  @Metadata({ data: "json, name=valueMsEpoch" })
  valueMsEpoch?: string;
}
