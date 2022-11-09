import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventDetailSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: number;

  @Metadata({ data: "json, name=eventDetailsUrl" })
  eventDetailsUrl: string;
}
