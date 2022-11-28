import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelectPsuAuthenticationMethod
/** 
 * Content of the body of a Select PSU authentication method request
 * 
**/
export class SelectPsuAuthenticationMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationMethodId" })
  authenticationMethodId: string;
}
