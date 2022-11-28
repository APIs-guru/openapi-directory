import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartySetAccountInfoRequest
/** 
 * Request to set the account information.
**/
export class IdentitytoolkitRelyingpartySetAccountInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttributes" })
  customAttributes?: string;

  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteAttribute" })
  deleteAttribute?: string[];

  @SpeakeasyMetadata({ data: "json, name=deleteProvider" })
  deleteProvider?: string[];

  @SpeakeasyMetadata({ data: "json, name=disableUser" })
  disableUser?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=lastLoginAt" })
  lastLoginAt?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=oobCode" })
  oobCode?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upgradeToFederatedLogin" })
  upgradeToFederatedLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validSince" })
  validSince?: string;
}
