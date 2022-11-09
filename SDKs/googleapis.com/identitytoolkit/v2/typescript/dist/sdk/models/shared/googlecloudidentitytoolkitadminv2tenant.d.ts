import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig } from "./googlecloudidentitytoolkitadminv2clientpermissionconfig";
import { GoogleCloudIdentitytoolkitAdminV2HashConfig } from "./googlecloudidentitytoolkitadminv2hashconfig";
import { GoogleCloudIdentitytoolkitAdminV2Inheritance } from "./googlecloudidentitytoolkitadminv2inheritance";
import { GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig } from "./googlecloudidentitytoolkitadminv2multifactorauthconfig";
import { GoogleCloudIdentitytoolkitAdminV2MonitoringConfig } from "./googlecloudidentitytoolkitadminv2monitoringconfig";
import { GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig } from "./googlecloudidentitytoolkitadminv2smsregionconfig";
/**
 * A Tenant contains configuration for the tenant in a multi-tenant project.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2Tenant extends SpeakeasyBase {
    allowPasswordSignup?: boolean;
    autodeleteAnonymousUsers?: boolean;
    client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;
    disableAuth?: boolean;
    displayName?: string;
    enableAnonymousUser?: boolean;
    enableEmailLinkSignin?: boolean;
    hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;
    inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;
    mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
    monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
    name?: string;
    smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
    testPhoneNumbers?: Map<string, string>;
}
