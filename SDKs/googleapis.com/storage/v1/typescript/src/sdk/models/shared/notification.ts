import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Notification
/** 
 * A subscription to receive Google PubSub notifications.
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_attributes" })
  customAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=event_types" })
  eventTypes?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=object_name_prefix" })
  objectNamePrefix?: string;

  @Metadata({ data: "json, name=payload_format" })
  payloadFormat?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
