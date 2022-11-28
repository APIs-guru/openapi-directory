import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyVerifyPasswordRequest
/** 
 * Request to verify the password.
**/
export class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingIdToken" })
  pendingIdToken?: string;

  @SpeakeasyMetadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
