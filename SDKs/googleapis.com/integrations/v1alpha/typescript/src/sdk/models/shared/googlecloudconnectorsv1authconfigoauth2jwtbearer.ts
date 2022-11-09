import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims } from "./googlecloudconnectorsv1authconfigoauth2jwtbearerjwtclaims";


// GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer
/** 
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
export class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientKey" })
  clientKey?: GoogleCloudConnectorsV1Secret;

  @Metadata({ data: "json, name=jwtClaims" })
  jwtClaims?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims;
}
