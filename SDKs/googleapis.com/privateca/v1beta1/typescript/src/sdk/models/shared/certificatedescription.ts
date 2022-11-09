import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyId } from "./keyid";
import { CertificateFingerprint } from "./certificatefingerprint";
import { ReusableConfigValues } from "./reusableconfigvalues";
import { PublicKey } from "./publickey";
import { SubjectDescription } from "./subjectdescription";
import { KeyId } from "./keyid";


// CertificateDescription
/** 
 * A CertificateDescription describes an X.509 certificate or CSR that has been issued, as an alternative to using ASN.1 / X.509.
**/
export class CertificateDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=aiaIssuingCertificateUrls" })
  aiaIssuingCertificateUrls?: string[];

  @Metadata({ data: "json, name=authorityKeyId" })
  authorityKeyId?: KeyId;

  @Metadata({ data: "json, name=certFingerprint" })
  certFingerprint?: CertificateFingerprint;

  @Metadata({ data: "json, name=configValues" })
  configValues?: ReusableConfigValues;

  @Metadata({ data: "json, name=crlDistributionPoints" })
  crlDistributionPoints?: string[];

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: PublicKey;

  @Metadata({ data: "json, name=subjectDescription" })
  subjectDescription?: SubjectDescription;

  @Metadata({ data: "json, name=subjectKeyId" })
  subjectKeyId?: KeyId;
}
