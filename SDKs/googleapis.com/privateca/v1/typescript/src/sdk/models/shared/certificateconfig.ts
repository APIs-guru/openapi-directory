import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKey } from "./publickey";
import { SubjectConfig } from "./subjectconfig";
import { X509Parameters } from "./x509parameters";


// CertificateConfig
/** 
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
export class CertificateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicKey" })
  publicKey?: PublicKey;

  @Metadata({ data: "json, name=subjectConfig" })
  subjectConfig?: SubjectConfig;

  @Metadata({ data: "json, name=x509Config" })
  x509Config?: X509Parameters;
}
