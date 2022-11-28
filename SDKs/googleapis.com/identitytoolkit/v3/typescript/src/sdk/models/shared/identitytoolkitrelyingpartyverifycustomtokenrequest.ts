import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
/** 
 * Request to verify a custom token
**/
export class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
