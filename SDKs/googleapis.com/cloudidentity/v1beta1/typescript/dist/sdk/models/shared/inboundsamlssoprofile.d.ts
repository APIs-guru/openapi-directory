import { SpeakeasyBase } from "../../../internal/utils";
import { SamlIdpConfig } from "./samlidpconfig";
import { SamlSpConfig } from "./samlspconfig";
/**
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
export declare class InboundSamlSsoProfile extends SpeakeasyBase {
    customer?: string;
    displayName?: string;
    idpConfig?: SamlIdpConfig;
    name?: string;
    spConfig?: SamlSpConfig;
}
/**
 * A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
**/
export declare class InboundSamlSsoProfileInput extends SpeakeasyBase {
    customer?: string;
    displayName?: string;
    idpConfig?: SamlIdpConfig;
}
