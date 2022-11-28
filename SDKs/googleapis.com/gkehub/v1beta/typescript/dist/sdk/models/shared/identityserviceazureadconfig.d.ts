import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the AzureAD Auth flow.
**/
export declare class IdentityServiceAzureAdConfig extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    encryptedClientSecret?: string;
    kubectlRedirectUri?: string;
    tenant?: string;
}
/**
 * Configuration for the AzureAD Auth flow.
**/
export declare class IdentityServiceAzureAdConfigInput extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    kubectlRedirectUri?: string;
    tenant?: string;
}
