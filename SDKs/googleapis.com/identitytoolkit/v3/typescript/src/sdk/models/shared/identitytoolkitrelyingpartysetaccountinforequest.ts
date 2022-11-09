import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartySetAccountInfoRequest
/** 
 * Request to set the account information.
**/
export class IdentitytoolkitRelyingpartySetAccountInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=captchaChallenge" })
  captchaChallenge?: string;

  @Metadata({ data: "json, name=captchaResponse" })
  captchaResponse?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=customAttributes" })
  customAttributes?: string;

  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=deleteAttribute" })
  deleteAttribute?: string[];

  @Metadata({ data: "json, name=deleteProvider" })
  deleteProvider?: string[];

  @Metadata({ data: "json, name=disableUser" })
  disableUser?: boolean;

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

  @Metadata({ data: "json, name=lastLoginAt" })
  lastLoginAt?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=oobCode" })
  oobCode?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string[];

  @Metadata({ data: "json, name=returnSecureToken" })
  returnSecureToken?: boolean;

  @Metadata({ data: "json, name=upgradeToFederatedLogin" })
  upgradeToFederatedLogin?: boolean;

  @Metadata({ data: "json, name=validSince" })
  validSince?: string;
}
