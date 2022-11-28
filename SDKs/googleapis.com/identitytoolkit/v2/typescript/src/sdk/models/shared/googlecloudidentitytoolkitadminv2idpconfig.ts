import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2IdpCertificate } from "./googlecloudidentitytoolkitadminv2idpcertificate";



// GoogleCloudIdentitytoolkitAdminV2IdpConfig
/** 
 * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
**/
export class GoogleCloudIdentitytoolkitAdminV2IdpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idpCertificates", elemType: GoogleCloudIdentitytoolkitAdminV2IdpCertificate })
  idpCertificates?: GoogleCloudIdentitytoolkitAdminV2IdpCertificate[];

  @SpeakeasyMetadata({ data: "json, name=idpEntityId" })
  idpEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=signRequest" })
  signRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssoUrl" })
  ssoUrl?: string;
}
