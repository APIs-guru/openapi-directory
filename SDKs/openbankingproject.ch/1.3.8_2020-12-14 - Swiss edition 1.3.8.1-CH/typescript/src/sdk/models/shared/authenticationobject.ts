import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


// AuthenticationObject
/** 
 * Authentication object.
 * 
**/
export class AuthenticationObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationMethodId" })
  authenticationMethodId: string;

  @Metadata({ data: "json, name=authenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @Metadata({ data: "json, name=authenticationVersion" })
  authenticationVersion?: string;

  @Metadata({ data: "json, name=explanation" })
  explanation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
