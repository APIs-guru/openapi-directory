import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DailyVisits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=visits" })
  visits?: number;
}
