import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyDeleteAccountRequest
/** 
 * Request to delete account.
**/
export class IdentitytoolkitRelyingpartyDeleteAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;
}
