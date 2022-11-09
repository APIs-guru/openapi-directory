import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthToken } from "./authtoken";
import { UserData } from "./userdata";


// Account
/** 
 * Represents an account passed into the Account Manager on Glass.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=authTokens", elemType: shared.AuthToken })
  authTokens?: AuthToken[];

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=userData", elemType: shared.UserData })
  userData?: UserData[];
}
