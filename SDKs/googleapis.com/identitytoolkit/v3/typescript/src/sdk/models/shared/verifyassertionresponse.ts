import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyAssertionResponse
/** 
 * Response of verifying the IDP assertion.
**/
export class VerifyAssertionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=appInstallationUrl" })
  appInstallationUrl?: string;

  @Metadata({ data: "json, name=appScheme" })
  appScheme?: string;

  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailRecycled" })
  emailRecycled?: boolean;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=federatedId" })
  federatedId?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=inputEmail" })
  inputEmail?: string;

  @Metadata({ data: "json, name=isNewUser" })
  isNewUser?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=needConfirmation" })
  needConfirmation?: boolean;

  @Metadata({ data: "json, name=needEmail" })
  needEmail?: boolean;

  @Metadata({ data: "json, name=nickName" })
  nickName?: string;

  @Metadata({ data: "json, name=oauthAccessToken" })
  oauthAccessToken?: string;

  @Metadata({ data: "json, name=oauthAuthorizationCode" })
  oauthAuthorizationCode?: string;

  @Metadata({ data: "json, name=oauthExpireIn" })
  oauthExpireIn?: number;

  @Metadata({ data: "json, name=oauthIdToken" })
  oauthIdToken?: string;

  @Metadata({ data: "json, name=oauthRequestToken" })
  oauthRequestToken?: string;

  @Metadata({ data: "json, name=oauthScope" })
  oauthScope?: string;

  @Metadata({ data: "json, name=oauthTokenSecret" })
  oauthTokenSecret?: string;

  @Metadata({ data: "json, name=originalEmail" })
  originalEmail?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=rawUserInfo" })
  rawUserInfo?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=screenName" })
  screenName?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=verifiedProvider" })
  verifiedProvider?: string[];
}
