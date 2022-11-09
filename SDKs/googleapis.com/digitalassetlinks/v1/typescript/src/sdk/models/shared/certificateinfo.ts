import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateInfo
/** 
 * Describes an X509 certificate.
**/
export class CertificateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256Fingerprint" })
  sha256Fingerprint?: string;
}
