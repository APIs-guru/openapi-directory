import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";


// GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials
/** 
 * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
**/
export class GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: GoogleCloudConnectorsV1Secret;
}
