import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BehavioralEventHttpCompletionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=occurredAt" })
  occurredAt?: Date;

  @Metadata({ data: "json, name=properties" })
  properties: Map<string, string>;

  @Metadata({ data: "json, name=utk" })
  utk?: string;
}
