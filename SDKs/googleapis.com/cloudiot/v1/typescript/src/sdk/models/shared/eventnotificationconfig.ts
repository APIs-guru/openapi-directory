import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventNotificationConfig
/** 
 * The configuration for forwarding telemetry events.
**/
export class EventNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubTopicName" })
  pubsubTopicName?: string;

  @SpeakeasyMetadata({ data: "json, name=subfolderMatches" })
  subfolderMatches?: string;
}
