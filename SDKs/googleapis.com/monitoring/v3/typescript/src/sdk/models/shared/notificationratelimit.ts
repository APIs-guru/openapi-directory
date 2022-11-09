import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationRateLimit
/** 
 * Control over the rate of notifications sent to this alert policy's notification channels.
**/
export class NotificationRateLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=period" })
  period?: string;
}
