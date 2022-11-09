import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventPublishConfig
/** 
 * Confirguration of PubSubEventWriter.
**/
export class EventPublishConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
