import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserInfo } from "./userinfo";


// GetAccountInfoResponse
/** 
 * Response of getting account information.
**/
export class GetAccountInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=users", elemType: shared.UserInfo })
  users?: UserInfo[];
}
