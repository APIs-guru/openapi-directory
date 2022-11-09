import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublishingOptions
/** 
 * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
**/
export class PublishingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=publishCaCert" })
  publishCaCert?: boolean;

  @Metadata({ data: "json, name=publishCrl" })
  publishCrl?: boolean;
}
