import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyEmailLinkSigninRequest
/** 
 * Request to sign in with email.
**/
export class IdentitytoolkitRelyingpartyEmailLinkSigninRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
