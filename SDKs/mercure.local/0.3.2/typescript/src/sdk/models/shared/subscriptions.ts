import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subscription } from "./subscription";


export class Subscriptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=@context" })
  atContext: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastEventID" })
  lastEventId: string;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.Subscription })
  subscriptions: Subscription[];

  @Metadata({ data: "json, name=type" })
  type: string;
}
