import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WeekDayInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
