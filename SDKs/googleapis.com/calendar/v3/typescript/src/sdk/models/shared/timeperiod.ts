import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
