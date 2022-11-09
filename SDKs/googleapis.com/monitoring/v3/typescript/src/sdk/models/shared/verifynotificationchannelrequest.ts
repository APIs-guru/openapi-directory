import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyNotificationChannelRequest
/** 
 * The VerifyNotificationChannel request.
**/
export class VerifyNotificationChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;
}
