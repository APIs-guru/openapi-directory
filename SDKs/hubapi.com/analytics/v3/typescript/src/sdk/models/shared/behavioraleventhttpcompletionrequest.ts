import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BehavioralEventHttpCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=occurredAt" })
  occurredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=utk" })
  utk?: string;
}
