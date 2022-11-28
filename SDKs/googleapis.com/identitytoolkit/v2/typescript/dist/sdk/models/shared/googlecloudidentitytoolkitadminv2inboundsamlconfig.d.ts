import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfigInput } from "./googlecloudidentitytoolkitadminv2spconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig } from "./googlecloudidentitytoolkitadminv2spconfig";
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;
    name?: string;
    spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfigInput;
}
/**
 * A pair of SAML RP-IDP configurations when the project acts as the relying party.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;
    name?: string;
    spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
}
