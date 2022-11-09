import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
/** 
 * Request to verify a custom token
**/
export class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
