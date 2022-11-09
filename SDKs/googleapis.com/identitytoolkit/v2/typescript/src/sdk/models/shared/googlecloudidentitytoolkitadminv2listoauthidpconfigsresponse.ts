import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig } from "./googlecloudidentitytoolkitadminv2oauthidpconfig";


// GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
/** 
 * Response for ListOAuthIdpConfigs
**/
export class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=oauthIdpConfigs", elemType: shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig })
  oauthIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[];
}
