import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@context" })
  atContext?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastEventID" })
  lastEventId?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=subscriber" })
  subscriber: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
