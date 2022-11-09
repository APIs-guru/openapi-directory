import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig } from "./googlecloudidentitytoolkitadminv2applesigninconfig";
/**
 * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig extends SpeakeasyBase {
    appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
    clientId?: string;
    clientSecret?: string;
    enabled?: boolean;
    name?: string;
}
