import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=@context" })
  atContext?: string;

  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastEventID" })
  lastEventId?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=subscriber" })
  subscriber: string;

  @Metadata({ data: "json, name=topic" })
  topic: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
