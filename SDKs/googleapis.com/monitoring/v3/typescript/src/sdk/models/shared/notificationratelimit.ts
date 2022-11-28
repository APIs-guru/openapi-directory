import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationRateLimit
/** 
 * Control over the rate of notifications sent to this alert policy's notification channels.
**/
export class NotificationRateLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;
}
