import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublishingOptions
/** 
 * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
**/
export class PublishingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publishCaCert" })
  publishCaCert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishCrl" })
  publishCrl?: boolean;
}
