import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: Date;
}
