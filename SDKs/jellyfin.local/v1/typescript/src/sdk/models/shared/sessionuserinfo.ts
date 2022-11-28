import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionUserInfo
/** 
 * Class SessionUserInfo.
**/
export class SessionUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
