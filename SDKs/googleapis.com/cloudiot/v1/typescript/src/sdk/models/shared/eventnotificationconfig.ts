import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventNotificationConfig
/** 
 * The configuration for forwarding telemetry events.
**/
export class EventNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubTopicName" })
  pubsubTopicName?: string;

  @Metadata({ data: "json, name=subfolderMatches" })
  subfolderMatches?: string;
}
