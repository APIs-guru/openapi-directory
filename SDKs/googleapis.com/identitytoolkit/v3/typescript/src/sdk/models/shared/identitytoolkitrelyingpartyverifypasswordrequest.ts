import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyVerifyPasswordRequest
/** 
 * Request to verify the password.
**/
export class IdentitytoolkitRelyingpartyVerifyPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @Metadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=pendingIdToken" })
  pendingIdToken?: string;

  @Metadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
