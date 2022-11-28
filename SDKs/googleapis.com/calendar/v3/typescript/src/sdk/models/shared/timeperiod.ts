import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
