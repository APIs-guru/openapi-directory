import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyPasswordResponse
/** 
 * Request of verifying the password.
**/
export class VerifyPasswordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localId" })
  localId?: string;

  @Metadata({ data: "json, name=oauthAccessToken" })
  oauthAccessToken?: string;

  @Metadata({ data: "json, name=oauthAuthorizationCode" })
  oauthAuthorizationCode?: string;

  @Metadata({ data: "json, name=oauthExpireIn" })
  oauthExpireIn?: number;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=registered" })
  registered?: boolean;
}
