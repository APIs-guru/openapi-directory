import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventDetailSettingsUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventDetailsUrl" })
  eventDetailsUrl: string;
}
