import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyPasswordResponse
/** 
 * Request of verifying the password.
**/
export class VerifyPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localId" })
  localId?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthAccessToken" })
  oauthAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthAuthorizationCode" })
  oauthAuthorizationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthExpireIn" })
  oauthExpireIn?: number;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registered" })
  registered?: boolean;
}
