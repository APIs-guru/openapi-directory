import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserInfo
/** 
 * User's information.
**/
export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;
}
