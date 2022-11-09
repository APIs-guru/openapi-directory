import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpCertificate } from "./googlecloudidentitytoolkitadminv2idpcertificate";
/**
 * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2IdpConfig extends SpeakeasyBase {
    idpCertificates?: GoogleCloudIdentitytoolkitAdminV2IdpCertificate[];
    idpEntityId?: string;
    signRequest?: boolean;
    ssoUrl?: string;
}
