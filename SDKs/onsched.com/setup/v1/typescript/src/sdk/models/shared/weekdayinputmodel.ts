import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WeekDayInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
