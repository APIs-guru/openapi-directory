import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaAccessToken
/** 
 * The access token represents the authorization of a specific application to access specific parts of a user’s data.
**/
export class GoogleCloudIntegrationsV1alphaAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=accessTokenExpireTime" })
  accessTokenExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshTokenExpireTime" })
  refreshTokenExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenType" })
  tokenType?: string;
}
