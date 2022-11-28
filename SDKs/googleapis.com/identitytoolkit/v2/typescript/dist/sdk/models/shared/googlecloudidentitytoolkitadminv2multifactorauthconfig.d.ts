import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    PhoneSms = "PHONE_SMS"
}
export declare enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    Mandatory = "MANDATORY"
}
/**
 * Options related to MultiFactor Authentication for the project.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig extends SpeakeasyBase {
    enabledProviders?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[];
    state?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum;
}
