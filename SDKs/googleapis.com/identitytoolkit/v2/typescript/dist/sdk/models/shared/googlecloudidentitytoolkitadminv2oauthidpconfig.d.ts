import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2OAuthResponseType } from "./googlecloudidentitytoolkitadminv2oauthresponsetype";
/**
 * Configuration options for authenticating with an OAuth IDP.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    displayName?: string;
    enabled?: boolean;
    issuer?: string;
    name?: string;
    responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
}
