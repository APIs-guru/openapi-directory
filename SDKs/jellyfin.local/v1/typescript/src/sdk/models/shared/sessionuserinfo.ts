import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SessionUserInfo
/** 
 * Class SessionUserInfo.
**/
export class SessionUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
