import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartySignupNewUserRequest
/** 
 * Request to signup new user, create anonymous user or anonymous user reauth.
**/
export class IdentitytoolkitRelyingpartySignupNewUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @Metadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
