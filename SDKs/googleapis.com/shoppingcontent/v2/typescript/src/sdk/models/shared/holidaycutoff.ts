import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HolidayCutoff extends SpeakeasyBase {
  @Metadata({ data: "json, name=deadlineDate" })
  deadlineDate?: string;

  @Metadata({ data: "json, name=deadlineHour" })
  deadlineHour?: number;

  @Metadata({ data: "json, name=deadlineTimezone" })
  deadlineTimezone?: string;

  @Metadata({ data: "json, name=holidayId" })
  holidayId?: string;

  @Metadata({ data: "json, name=visibleFromDate" })
  visibleFromDate?: string;
}
