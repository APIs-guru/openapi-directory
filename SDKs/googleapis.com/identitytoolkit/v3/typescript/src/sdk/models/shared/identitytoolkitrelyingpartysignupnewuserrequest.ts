import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartySignupNewUserRequest
/** 
 * Request to signup new user, create anonymous user or anonymous user reauth.
**/
export class IdentitytoolkitRelyingpartySignupNewUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" })
  tenantProjectNumber?: string;
}
