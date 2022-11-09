import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateFingerprint
/** 
 * A group of fingerprints for the x509 certificate.
**/
export class CertificateFingerprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;
}
