import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from: Date;

  @Metadata({ data: "json, name=to" })
  to: Date;
}
