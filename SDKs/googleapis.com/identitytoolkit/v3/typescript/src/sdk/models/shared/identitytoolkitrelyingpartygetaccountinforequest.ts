import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyGetAccountInfoRequest
/** 
 * Request to get the account information.
**/
export class IdentitytoolkitRelyingpartyGetAccountInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=email" })
  email?: string[];

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string[];

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string[];
}
