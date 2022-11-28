import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetNotificationChannelVerificationCodeRequest
/** 
 * The GetNotificationChannelVerificationCode request.
**/
export class GetNotificationChannelVerificationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
