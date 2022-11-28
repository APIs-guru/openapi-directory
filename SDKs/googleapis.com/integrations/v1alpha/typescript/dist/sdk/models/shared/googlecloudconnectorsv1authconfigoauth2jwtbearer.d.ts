import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims } from "./googlecloudconnectorsv1authconfigoauth2jwtbearerjwtclaims";
/**
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
**/
export declare class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer extends SpeakeasyBase {
    clientKey?: GoogleCloudConnectorsV1Secret;
    jwtClaims?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims;
}
