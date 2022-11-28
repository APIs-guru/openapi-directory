import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Hl7V2NotificationConfig
/** 
 * Specifies where and whether to send notifications upon changes to a data store.
**/
export class Hl7V2NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;
}
