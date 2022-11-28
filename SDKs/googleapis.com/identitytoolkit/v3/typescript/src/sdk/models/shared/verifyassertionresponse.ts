import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyAssertionResponse
/** 
 * Response of verifying the IDP assertion.
**/
export class VerifyAssertionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=appInstallationUrl" })
  appInstallationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=appScheme" })
  appScheme?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailRecycled" })
  emailRecycled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=inputEmail" })
  inputEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=needConfirmation" })
  needConfirmation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=needEmail" })
  needEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickName" })
  nickName?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthAccessToken" })
  oauthAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthAuthorizationCode" })
  oauthAuthorizationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthExpireIn" })
  oauthExpireIn?: number;

  @SpeakeasyMetadata({ data: "json, name=oauthIdToken" })
  oauthIdToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthRequestToken" })
  oauthRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthScope" })
  oauthScope?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthTokenSecret" })
  oauthTokenSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=originalEmail" })
  originalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=rawUserInfo" })
  rawUserInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=screenName" })
  screenName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=verifiedProvider" })
  verifiedProvider?: string[];
}
