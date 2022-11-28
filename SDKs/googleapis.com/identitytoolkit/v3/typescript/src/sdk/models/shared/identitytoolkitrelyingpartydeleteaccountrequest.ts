import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyDeleteAccountRequest
/** 
 * Request to delete account.
**/
export class IdentitytoolkitRelyingpartyDeleteAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;
}
