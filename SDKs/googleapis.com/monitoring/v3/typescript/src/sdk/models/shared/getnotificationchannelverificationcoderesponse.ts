import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetNotificationChannelVerificationCodeResponse
/** 
 * The GetNotificationChannelVerificationCode request.
**/
export class GetNotificationChannelVerificationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
