import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventPublishConfig
/** 
 * Confirguration of PubSubEventWriter.
**/
export class EventPublishConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
