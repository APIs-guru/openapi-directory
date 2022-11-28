import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
import { Error } from "./error";



export class FreeBusyCalendar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=busy", elemType: TimePeriod })
  busy?: TimePeriod[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];
}
