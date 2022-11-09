import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKey } from "./publickey";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";
import { SubjectConfig } from "./subjectconfig";


// CertificateConfig
/** 
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
export class CertificateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicKey" })
  publicKey?: PublicKey;

  @Metadata({ data: "json, name=reusableConfig" })
  reusableConfig?: ReusableConfigWrapper;

  @Metadata({ data: "json, name=subjectConfig" })
  subjectConfig?: SubjectConfig;
}
