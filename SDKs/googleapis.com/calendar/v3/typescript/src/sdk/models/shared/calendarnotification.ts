import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalendarNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
