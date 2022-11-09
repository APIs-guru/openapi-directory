import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimePeriod } from "./timeperiod";
import { Error } from "./error";


export class FreeBusyCalendar extends SpeakeasyBase {
  @Metadata({ data: "json, name=busy", elemType: shared.TimePeriod })
  busy?: TimePeriod[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
