import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfig
/** 
 * Specifies where to send notifications upon changes to a data store.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=sendForBulkImport" })
  sendForBulkImport?: boolean;
}
