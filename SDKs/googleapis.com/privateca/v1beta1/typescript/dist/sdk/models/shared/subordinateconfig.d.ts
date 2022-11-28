import { SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfigChain } from "./subordinateconfigchain";
/**
 * Describes a subordinate CA's issuers. This is either a resource path to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
**/
export declare class SubordinateConfig extends SpeakeasyBase {
    certificateAuthority?: string;
    pemIssuerChain?: SubordinateConfigChain;
}
