import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2SpCertificate } from "./googlecloudidentitytoolkitadminv2spcertificate";
/**
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2SpConfig extends SpeakeasyBase {
    callbackUri?: string;
    spCertificates?: GoogleCloudIdentitytoolkitAdminV2SpCertificate[];
    spEntityId?: string;
}
/**
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
export declare class GoogleCloudIdentitytoolkitAdminV2SpConfigInput extends SpeakeasyBase {
    callbackUri?: string;
    spEntityId?: string;
}
