import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WeekDayInputModel } from "./weekdayinputmodel";



export class AvailabilityInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fri" })
  fri?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=mon" })
  mon?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=sat" })
  sat?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=sun" })
  sun?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=thu" })
  thu?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=tue" })
  tue?: WeekDayInputModel;

  @SpeakeasyMetadata({ data: "json, name=wed" })
  wed?: WeekDayInputModel;
}
