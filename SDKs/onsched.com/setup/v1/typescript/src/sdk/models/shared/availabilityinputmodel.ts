import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";
import { WeekDayInputModel } from "./weekdayinputmodel";


export class AvailabilityInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=fri" })
  fri?: WeekDayInputModel;

  @Metadata({ data: "json, name=mon" })
  mon?: WeekDayInputModel;

  @Metadata({ data: "json, name=sat" })
  sat?: WeekDayInputModel;

  @Metadata({ data: "json, name=sun" })
  sun?: WeekDayInputModel;

  @Metadata({ data: "json, name=thu" })
  thu?: WeekDayInputModel;

  @Metadata({ data: "json, name=tue" })
  tue?: WeekDayInputModel;

  @Metadata({ data: "json, name=wed" })
  wed?: WeekDayInputModel;
}
