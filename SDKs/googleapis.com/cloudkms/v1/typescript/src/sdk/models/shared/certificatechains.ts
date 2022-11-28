import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateChains
/** 
 * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
**/
export class CertificateChains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caviumCerts" })
  caviumCerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=googleCardCerts" })
  googleCardCerts?: string[];

  @SpeakeasyMetadata({ data: "json, name=googlePartitionCerts" })
  googlePartitionCerts?: string[];
}
