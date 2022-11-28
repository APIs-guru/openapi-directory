import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthToken } from "./authtoken";
import { UserData } from "./userdata";



// Account
/** 
 * Represents an account passed into the Account Manager on Glass.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authTokens", elemType: AuthToken })
  authTokens?: AuthToken[];

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=userData", elemType: UserData })
  userData?: UserData[];
}
