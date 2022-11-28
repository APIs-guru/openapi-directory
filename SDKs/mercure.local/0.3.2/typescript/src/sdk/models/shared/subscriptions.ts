import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



export class Subscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@context" })
  atContext: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastEventID" })
  lastEventId: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: Subscription })
  subscriptions: Subscription[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
