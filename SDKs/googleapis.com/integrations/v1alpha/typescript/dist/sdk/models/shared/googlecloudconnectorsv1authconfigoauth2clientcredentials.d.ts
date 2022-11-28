import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
**/
export declare class GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: GoogleCloudConnectorsV1Secret;
}
