import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventReminder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;
}
