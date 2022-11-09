import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelectPsuAuthenticationMethod
/** 
 * Content of the body of a Select PSU authentication method request
 * 
**/
export class SelectPsuAuthenticationMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationMethodId" })
  authenticationMethodId: string;
}
