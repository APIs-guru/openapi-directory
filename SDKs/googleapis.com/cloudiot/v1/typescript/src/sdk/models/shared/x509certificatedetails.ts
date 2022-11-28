import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// X509CertificateDetails
/** 
 * Details of an X.509 certificate. For informational purposes only.
**/
export class X509CertificateDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiryTime" })
  expiryTime?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeyType" })
  publicKeyType?: string;

  @SpeakeasyMetadata({ data: "json, name=signatureAlgorithm" })
  signatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
