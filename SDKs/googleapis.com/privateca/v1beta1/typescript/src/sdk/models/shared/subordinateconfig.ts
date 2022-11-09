import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubordinateConfigChain } from "./subordinateconfigchain";


// SubordinateConfig
/** 
 * Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
**/
export class SubordinateConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthority" })
  certificateAuthority?: string;

  @Metadata({ data: "json, name=pemIssuerChain" })
  pemIssuerChain?: SubordinateConfigChain;
}
