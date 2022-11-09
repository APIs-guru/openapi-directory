import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CalendarNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
