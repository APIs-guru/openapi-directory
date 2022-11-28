import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// GetAccountInfoResponse
/** 
 * Response of getting account information.
**/
export class GetAccountInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserInfo })
  users?: UserInfo[];
}
