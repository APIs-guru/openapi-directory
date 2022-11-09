import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIdentitytoolkitAdminV2SpCertificate } from "./googlecloudidentitytoolkitadminv2spcertificate";


// GoogleCloudIdentitytoolkitAdminV2SpConfig
/** 
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
export class GoogleCloudIdentitytoolkitAdminV2SpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=callbackUri" })
  callbackUri?: string;

  @Metadata({ data: "json, name=spCertificates", elemType: shared.GoogleCloudIdentitytoolkitAdminV2SpCertificate })
  spCertificates?: GoogleCloudIdentitytoolkitAdminV2SpCertificate[];

  @Metadata({ data: "json, name=spEntityId" })
  spEntityId?: string;
}
