import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateFingerprint
/** 
 * A group of fingerprints for the x509 certificate.
**/
export class CertificateFingerprint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256Hash" })
  sha256Hash?: string;
}
