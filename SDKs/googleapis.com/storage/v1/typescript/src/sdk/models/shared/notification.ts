import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Notification
/** 
 * A subscription to receive Google PubSub notifications.
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_attributes" })
  customAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=event_types" })
  eventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=object_name_prefix" })
  objectNamePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=payload_format" })
  payloadFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
