import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2SpCertificate } from "./googlecloudidentitytoolkitadminv2spcertificate";



// GoogleCloudIdentitytoolkitAdminV2SpConfig
/** 
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
export class GoogleCloudIdentitytoolkitAdminV2SpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUri" })
  callbackUri?: string;

  @SpeakeasyMetadata({ data: "json, name=spCertificates", elemType: GoogleCloudIdentitytoolkitAdminV2SpCertificate })
  spCertificates?: GoogleCloudIdentitytoolkitAdminV2SpCertificate[];

  @SpeakeasyMetadata({ data: "json, name=spEntityId" })
  spEntityId?: string;
}


// GoogleCloudIdentitytoolkitAdminV2SpConfigInput
/** 
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
export class GoogleCloudIdentitytoolkitAdminV2SpConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUri" })
  callbackUri?: string;

  @SpeakeasyMetadata({ data: "json, name=spEntityId" })
  spEntityId?: string;
}
