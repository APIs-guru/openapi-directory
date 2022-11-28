import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HolidayCutoff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deadlineDate" })
  deadlineDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deadlineHour" })
  deadlineHour?: number;

  @SpeakeasyMetadata({ data: "json, name=deadlineTimezone" })
  deadlineTimezone?: string;

  @SpeakeasyMetadata({ data: "json, name=holidayId" })
  holidayId?: string;

  @SpeakeasyMetadata({ data: "json, name=visibleFromDate" })
  visibleFromDate?: string;
}
