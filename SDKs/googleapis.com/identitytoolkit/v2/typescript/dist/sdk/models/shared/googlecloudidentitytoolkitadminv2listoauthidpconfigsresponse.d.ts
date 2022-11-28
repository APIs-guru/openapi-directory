import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig } from "./googlecloudidentitytoolkitadminv2oauthidpconfig";
/**
 * Response for ListOAuthIdpConfigs
**/
export declare class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    oauthIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[];
}
