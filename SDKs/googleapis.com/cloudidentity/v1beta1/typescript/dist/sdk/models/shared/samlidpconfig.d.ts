import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SAML IDP (identity provider) configuration.
**/
export declare class SamlIdpConfig extends SpeakeasyBase {
    changePasswordUri?: string;
    entityId?: string;
    logoutRedirectUri?: string;
    singleSignOnServiceUri?: string;
}
