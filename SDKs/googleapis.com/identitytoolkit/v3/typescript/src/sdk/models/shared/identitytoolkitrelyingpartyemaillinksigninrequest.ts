import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyEmailLinkSigninRequest
/** 
 * Request to sign in with email.
**/
export class IdentitytoolkitRelyingpartyEmailLinkSigninRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
