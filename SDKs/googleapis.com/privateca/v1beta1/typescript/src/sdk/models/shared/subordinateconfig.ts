import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfigChain } from "./subordinateconfigchain";



// SubordinateConfig
/** 
 * Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
**/
export class SubordinateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthority" })
  certificateAuthority?: string;

  @SpeakeasyMetadata({ data: "json, name=pemIssuerChain" })
  pemIssuerChain?: SubordinateConfigChain;
}
