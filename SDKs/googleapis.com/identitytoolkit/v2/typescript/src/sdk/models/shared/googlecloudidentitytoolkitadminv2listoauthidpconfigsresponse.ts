import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig } from "./googlecloudidentitytoolkitadminv2oauthidpconfig";



// GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
/** 
 * Response for ListOAuthIdpConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthIdpConfigs", elemType: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig })
  oauthIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[];
}
