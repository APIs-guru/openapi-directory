import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitAdminV2IdpCertificate
/** 
 * The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
**/
export class GoogleCloudIdentitytoolkitAdminV2IdpCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=x509Certificate" })
  x509Certificate?: string;
}
