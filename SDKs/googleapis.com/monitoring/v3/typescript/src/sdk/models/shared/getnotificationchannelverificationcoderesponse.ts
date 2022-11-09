import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetNotificationChannelVerificationCodeResponse
/** 
 * The GetNotificationChannelVerificationCode request.
**/
export class GetNotificationChannelVerificationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
