import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateInfo
/** 
 * Describes an X509 certificate.
**/
export class CertificateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256Fingerprint" })
  sha256Fingerprint?: string;
}
