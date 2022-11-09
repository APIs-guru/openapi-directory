import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration for OIDC Auth flow.
**/
export declare class IdentityServiceOidcConfig extends SpeakeasyBase {
    certificateAuthorityData?: string;
    clientId?: string;
    clientSecret?: string;
    deployCloudConsoleProxy?: boolean;
    enableAccessToken?: boolean;
    encryptedClientSecret?: string;
    extraParams?: string;
    groupPrefix?: string;
    groupsClaim?: string;
    issuerUri?: string;
    kubectlRedirectUri?: string;
    scopes?: string;
    userClaim?: string;
    userPrefix?: string;
}
