import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventDetailSettingsUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventDetailsUrl" })
  eventDetailsUrl: string;
}
