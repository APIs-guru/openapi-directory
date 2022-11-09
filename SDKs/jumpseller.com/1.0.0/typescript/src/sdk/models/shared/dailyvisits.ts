import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DailyVisits extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=visits" })
  visits?: number;
}
