import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyGetAccountInfoRequest
/** 
 * Request to get the account information.
**/
export class IdentitytoolkitRelyingpartyGetAccountInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string[];

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string[];

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string[];
}
