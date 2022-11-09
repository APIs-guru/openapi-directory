import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaAccessToken
/** 
 * The access token represents the authorization of a specific application to access specific parts of a user’s data.
**/
export class GoogleCloudIntegrationsV1alphaAccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=accessTokenExpireTime" })
  accessTokenExpireTime?: string;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @Metadata({ data: "json, name=refreshTokenExpireTime" })
  refreshTokenExpireTime?: string;

  @Metadata({ data: "json, name=tokenType" })
  tokenType?: string;
}
