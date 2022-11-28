import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2IdpCertificate
/** 
 * The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
**/
export class GoogleCloudIdentitytoolkitAdminV2IdpCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x509Certificate" })
  x509Certificate?: string;
}
