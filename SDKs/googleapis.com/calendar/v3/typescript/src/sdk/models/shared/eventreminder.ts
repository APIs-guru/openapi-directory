import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventReminder extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=minutes" })
  minutes?: number;
}
