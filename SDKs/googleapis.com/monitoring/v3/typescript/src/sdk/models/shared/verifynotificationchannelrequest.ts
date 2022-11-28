import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyNotificationChannelRequest
/** 
 * The VerifyNotificationChannel request.
**/
export class VerifyNotificationChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;
}
