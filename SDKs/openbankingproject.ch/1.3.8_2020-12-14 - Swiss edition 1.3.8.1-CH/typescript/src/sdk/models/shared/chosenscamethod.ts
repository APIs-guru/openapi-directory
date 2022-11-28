import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



// ChosenScaMethod
/** 
 * Authentication object.
 * 
**/
export class ChosenScaMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationMethodId" })
  authenticationMethodId: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType: AuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authenticationVersion" })
  authenticationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
