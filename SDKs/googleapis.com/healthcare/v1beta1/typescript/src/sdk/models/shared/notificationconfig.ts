import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfig
/** 
 * Specifies where to send notifications upon changes to a data store.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=sendForBulkImport" })
  sendForBulkImport?: boolean;
}
