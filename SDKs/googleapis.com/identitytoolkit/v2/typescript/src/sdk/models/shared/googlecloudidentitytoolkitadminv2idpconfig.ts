import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2IdpCertificate } from "./googlecloudidentitytoolkitadminv2idpcertificate";


// GoogleCloudIdentitytoolkitAdminV2IdpConfig
/** 
 * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
**/
export class GoogleCloudIdentitytoolkitAdminV2IdpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=idpCertificates", elemType: shared.GoogleCloudIdentitytoolkitAdminV2IdpCertificate })
  idpCertificates?: GoogleCloudIdentitytoolkitAdminV2IdpCertificate[];

  @Metadata({ data: "json, name=idpEntityId" })
  idpEntityId?: string;

  @Metadata({ data: "json, name=signRequest" })
  signRequest?: boolean;

  @Metadata({ data: "json, name=ssoUrl" })
  ssoUrl?: string;
}
