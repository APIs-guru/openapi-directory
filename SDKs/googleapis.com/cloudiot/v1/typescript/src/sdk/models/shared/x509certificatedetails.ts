import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// X509CertificateDetails
/** 
 * Details of an X.509 certificate. For informational purposes only.
**/
export class X509CertificateDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=publicKeyType" })
  publicKeyType?: string;

  @Metadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
