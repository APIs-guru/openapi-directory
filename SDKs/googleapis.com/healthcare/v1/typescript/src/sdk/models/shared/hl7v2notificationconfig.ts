import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Hl7V2NotificationConfig
/** 
 * Specifies where and whether to send notifications upon changes to a data store.
**/
export class Hl7V2NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;
}
