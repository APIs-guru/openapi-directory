import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventDetailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=eventDetailsUrl" })
  eventDetailsUrl: string;
}
