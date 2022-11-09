import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetNotificationChannelVerificationCodeRequest
/** 
 * The GetNotificationChannelVerificationCode request.
**/
export class GetNotificationChannelVerificationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
