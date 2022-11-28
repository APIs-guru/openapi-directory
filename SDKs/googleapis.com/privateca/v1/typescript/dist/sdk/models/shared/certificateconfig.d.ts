import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";
import { SubjectConfig } from "./subjectconfig";
import { X509Parameters } from "./x509parameters";
/**
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
export declare class CertificateConfig extends SpeakeasyBase {
    publicKey?: PublicKey;
    subjectConfig?: SubjectConfig;
    x509Config?: X509Parameters;
}
