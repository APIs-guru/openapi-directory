import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyId } from "./keyid";
import { CertificateFingerprint } from "./certificatefingerprint";
import { PublicKey } from "./publickey";
import { SubjectDescription } from "./subjectdescription";
import { X509Parameters } from "./x509parameters";



// CertificateDescription
/** 
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
**/
export class CertificateDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aiaIssuingCertificateUrls" })
  aiaIssuingCertificateUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorityKeyId" })
  authorityKeyId?: KeyId;

  @SpeakeasyMetadata({ data: "json, name=certFingerprint" })
  certFingerprint?: CertificateFingerprint;

  @SpeakeasyMetadata({ data: "json, name=crlDistributionPoints" })
  crlDistributionPoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: PublicKey;

  @SpeakeasyMetadata({ data: "json, name=subjectDescription" })
  subjectDescription?: SubjectDescription;

  @SpeakeasyMetadata({ data: "json, name=subjectKeyId" })
  subjectKeyId?: KeyId;

  @SpeakeasyMetadata({ data: "json, name=x509Description" })
  x509Description?: X509Parameters;
}
