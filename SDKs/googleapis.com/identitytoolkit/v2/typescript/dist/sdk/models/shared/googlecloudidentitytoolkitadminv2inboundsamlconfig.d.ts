import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpConfig } from "./googlecloudidentitytoolkitadminv2idpconfig";
import { GoogleCloudIdentitytoolkitAdminV2SpConfig } from "./googlecloudidentitytoolkitadminv2spconfig";
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
