import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserInfo
/** 
 * User's information.
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
