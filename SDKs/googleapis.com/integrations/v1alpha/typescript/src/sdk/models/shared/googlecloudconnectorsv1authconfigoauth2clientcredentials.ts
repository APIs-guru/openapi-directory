import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";



// GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials
/** 
 * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
**/
export class GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: GoogleCloudConnectorsV1Secret;
}
